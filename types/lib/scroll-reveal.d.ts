interface HTMLELEMETWithScrollReveal extends HTMLElement {
    __scrollReveal__?: () => void;
}
declare const VueScroll: {
    mounted: (el: HTMLELEMETWithScrollReveal, binding: any) => void;
    unmounted: (el: HTMLELEMETWithScrollReveal) => void;
};
export default VueScroll;
