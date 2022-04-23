export const generateArray = (length: number): Array<number> => {
  return [...Array(length).keys()];
};

export const arrayCount = <I>(fn: (i: I) => boolean, arr: Array<I>) => {
  return arr.reduce((count, item) => {
    return fn(item) ? count + 1 : count;
  }, 0);
};
