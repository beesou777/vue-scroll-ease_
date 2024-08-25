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
            const inSrc = el.getBoundingClientRect().top < window.innerHeight / 1;
            el.style.opacity = inSrc ? '1' : '0';
            el.style.transform = inSrc ? 'none' : t || 'translateY(20px)';
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

