export const arrSum = (arr: number[]): number =>
  arr.reduce((acc, n) => acc + n, 0);
export const arrAverage = (arr: number[]): number =>
  arr.length ? arrSum(arr) / arr.length : 0;
export const arrMin = (arr: number[]): number | null =>
  arr.length ? Math.min(...arr) : null;
export const arrMax = (arr: number[]): number | null =>
  arr.length ? Math.max(...arr) : null;
export const arrFirst = (arr: number[]): number | null =>
  arr.length ? arr[0] : null;
export const arrLast = (arr: number[]): number | null =>
  arr.length ? arr[arr.length - 1] : null;
export const arrRandom = (arr: number[]): number | null =>
  arr.length ? arr[Math.floor(Math.random() * arr.length)] : null;
export const arrRandomInt = (arr: number[]): number | null =>
  arr.length
    ? Math.floor(Math.random() * (Math.max(...arr) - Math.min(...arr) + 1)) +
      Math.min(...arr)
    : null;
export const arrShuffle = (arr: number[]): number[] => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
export const arrRandomIntInclusive = (arr: number[]): number | null =>
  arr.length
    ? Math.floor(Math.random() * (Math.max(...arr) - Math.min(...arr) + 1)) +
      Math.min(...arr)
    : null;
