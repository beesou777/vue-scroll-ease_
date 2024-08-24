import { DirectiveBinding } from 'vue';
import { getTransformValue } from '../utils/transformation';
import { debounce } from '../utils/debounce';

type HTMLELEMETWithScrollReveal = HTMLElement & {
    __scrollReveal__?: () => void;
};

const VueScroll = {
    mounted: (el: HTMLELEMETWithScrollReveal, binding: DirectiveBinding) => {
        const options = binding.value || {};
        const { transform, transitionDelay } = getTransformValue(options);
        
        // Apply the transformation and delay to the element
        el.style.transform = transform;
        el.style.transition = `opacity 0.6s ease-out, transform 0.6s ease-out`;
        el.style.transitionDelay = transitionDelay || '0ms';

        const scrollReveal = debounce(() => {
            const elementIsScreen = el.getBoundingClientRect().top < window.innerHeight / 1;

            if (elementIsScreen) {
                el.classList.add("scroll-ease-revealed");
            } else {
                el.classList.remove("scroll-ease-revealed");
            }
        }, 10);

        window.addEventListener('scroll', scrollReveal);
        scrollReveal();
        el.__scrollReveal__ = scrollReveal;
    },
    unmounted: (el: HTMLELEMETWithScrollReveal) => {
        if (typeof el.__scrollReveal__ === 'function') {
            window.removeEventListener('scroll', el.__scrollReveal__);
        }
    }
};

// place it to original place
const style = document.createElement('style');
style.textContent = `
  .scroll-reveal-starter {
    opacity: 0;
    transform: translateY(20px);
  }
  .scroll-ease-revealed {
    opacity: 1 !important;
    transform: translate(0, 0) !important;
  }
`;
document.head.appendChild(style);

export default VueScroll;
