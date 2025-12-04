export class ArrayLib {
  /**
   * Returns the first and last elements of the array.
   */
  getFirstAndLast<T = any>(arr: T[]): { first: T | null; last: T | null } {
    if (!Array.isArray(arr) || arr.length === 0) {
      return { first: null, last: null };
    }
    return { first: arr[0], last: arr[arr.length - 1] };
  }

  /**
   * Returns a new array without duplicates.
   */
  unique<T = any>(arr: T[]): T[] {
    return [...new Set(arr)];
  }

  /**
   * Returns a reversed copy of the array (non-mutating).
   */
  reversed<T = any>(arr: T[]): T[] {
    return [...arr].reverse();
  }

  /**
   * Returns a chunked array with a given size.
   * Example: [1,2,3,4,5], size=2 → [[1,2],[3,4],[5]]
   */
  chunk<T = any>(arr: T[], size: number): T[][] {
    if (size <= 0) throw new Error("Chunk size must be greater than 0");
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }

  /**
   * Returns true if all items are unique.
   */
  isUnique<T = any>(arr: T[]): boolean {
    return new Set(arr).size === arr.length;
  }

  /**
   * Flattens nested arrays (one level deep).
   */
  flatten<T = any>(arr: T[]): T[] {
    return arr.flat() as T[];
  }

  /**
   * Returns the sum of numeric values.
   */
  sum(arr: number[]): number {
    return arr.reduce((acc, n) => acc + n, 0);
  }

  /**
   * Returns the average of numeric values.
   */
  average(arr: number[]): number {
    return arr.length ? this.sum(arr) / arr.length : 0;
  }

  compact<T = any>(arr: T[]): T[] {
    return arr.filter(Boolean);
  }

  shuffle<T = any>(arr: T[]): T[] {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  random<T = any>(arr: T[]): T | null {
    if (arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Returns the smallest or largest number in the array.
  min(arr: number[]): number | null {
    if (!arr.length) return null;
    return Math.min(...arr);
  }

  max(arr: number[]): number | null {
    if (!arr.length) return null;
    return Math.max(...arr);
  }

  // Useful in pagination
  take<T = any>(arr: T[], n: number): T[] {
    return arr.slice(0, n);
  }

  skip<T = any>(arr: T[], n: number): T[] {
    return arr.slice(n);
  }
}
