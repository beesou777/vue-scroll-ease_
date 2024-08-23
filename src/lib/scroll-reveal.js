export default {
  mounted: (el, binding) => {
    const direction = binding.arg || "bottom";
    let transformValue;

    switch (direction) {
      case "bottom":
        transformValue = "translateY(20px)";
        break;
      case "left":
        transformValue = "translateX(-50px)";
        break;
      case "right":
        transformValue = "translateX(50px)";
        break;
      default:
        transformValue = "translateY(20px)";
    }

    el.style.opacity = "0";
    el.style.transform = transformValue;
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

    const scrollReveal = () => {

      const elementIsScreen = el.getBoundingClientRect().top < window.innerHeight / 1.02;

      if (elementIsScreen) {
        el.classList.add("revealed");
        el.style.opacity = "1";
        el.style.transform = "translateX(0) translateY(0)";
      } else {
        el.classList.remove("revealed");
        el.style.opacity = "0";
        el.style.transform = transformValue;
      }
    }

    window.addEventListener('scroll', scrollReveal);

    scrollReveal();
    el.__scrollReveal = scrollReveal
  },
  unmounted: (el) => {
    window.removeEventListener('scroll', el.__scrollReveal);
    delete el.__scrollReveal;
  }
}