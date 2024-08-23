import VueScrollEffect from './lib/scroll-reveal';

const Plugin = {
  install(app) {
    app.directive('scroll-effect', VueScrollEffect);
  }
};

export default Plugin;
export { VueScrollEffect };
