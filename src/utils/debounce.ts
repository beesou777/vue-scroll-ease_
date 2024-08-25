export const debounce = (func: () => void, w: number) => {
    let t: number;
    return function () {
      clearTimeout(t);
      t = window.setTimeout(() => func(), w);
    };
  };
  