// src/utils/debounce.ts
export const debounce = (func: () => void, wait: number) => {
    let timeout: number;
    return function () {
      clearTimeout(timeout);
      timeout = window.setTimeout(() => func(), wait);
    };
  };
  