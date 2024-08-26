import { DirectiveBinding } from 'vue';
import { getTrans } from '../utils/transformation';
import { debounce } from '../utils/debounce';

type ElemScroll = HTMLElement & {
    __scrlRvl__?: () => void;
};

const VueScroll = {
    mounted: (el: ElemScroll, binding: DirectiveBinding) => {
        const opt = binding.value || {};
        const { t, dly,dur } = getTrans(opt);
        
        el.style.transform = t;
        el.style.transition = `opacity ${dur}s ease-out, transform ${dur}s ease-in-out`;
        el.style.transitionDelay = dly || '0ms';
        el.style.transitionDuration = dur;

        const scrRvl = debounce(() => {
            const inView = el.getBoundingClientRect().top < window.innerHeight / 1;

            el.style.opacity = inView ? '1' : '0';
            el.style.transform = inView ? 'translate(0,0)' : t || 'translateY(20px)';
            el.style.transition = inView ? `opacity ${dur} ease-out, transform ${dur} ease-in-out` : `opacity .5s ease-out, transform .5s ease-in-out`;

        }, 10);

        window.addEventListener('scroll', scrRvl);
        scrRvl();
        el.__scrlRvl__ = scrRvl;
    },
    unmounted: (el: ElemScroll) => {
        if (typeof el.__scrlRvl__ === 'function') {
            window.removeEventListener('scroll', el.__scrlRvl__);
        }
    }
};

export default VueScroll;

