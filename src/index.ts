import { App, Directive } from 'vue';
import VueScroll from './lib/scroll-reveal';

const VueScrollEase = {
  install(app: App) {
    app.directive('scroll-ease', VueScroll as Directive);
  }
};

export default VueScrollEase;
export { VueScrollEase };
