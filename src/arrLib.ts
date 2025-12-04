export const sum = (arr: number[]): number =>
  arr.reduce((acc, n) => acc + n, 0);
export const average = (arr: number[]): number =>
  arr.length ? sum(arr) / arr.length : 0;
export const min = (arr: number[]): number | null =>
  arr.length ? Math.min(...arr) : null;
export const max = (arr: number[]): number | null =>
  arr.length ? Math.max(...arr) : null;
export const first = (arr: number[]): number | null =>
  arr.length ? arr[0] : null;
export const last = (arr: number[]): number | null =>
  arr.length ? arr[arr.length - 1] : null;
export const getRandom = (arr: number[]): number | null =>
  arr.length ? arr[Math.floor(Math.random() * arr.length)] : null;
export const getRandomInt = (arr: number[]): number | null =>
  arr.length
    ? Math.floor(Math.random() * (Math.max(...arr) - Math.min(...arr) + 1)) +
      Math.min(...arr)
    : null;
export const shuffle = (arr: number[]): number[] => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
export const getRandomIntInclusive = (arr: number[]): number | null =>
  arr.length
    ? Math.floor(Math.random() * (Math.max(...arr) - Math.min(...arr) + 1)) +
      Math.min(...arr)
    : null;
