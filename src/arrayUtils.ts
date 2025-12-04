export class ArrayUtils<T> {
  private arr: T[];

  constructor(arr: T[]) {
    this.arr = arr;
  }

  /**
   * Returns the first and last elements of the array.
   */
  getFirstAndLast(): { first: T | null; last: T | null } {
    if (!Array.isArray(this.arr) || this.arr.length === 0) {
      return { first: null, last: null };
    }
    return { first: this.arr[0], last: this.arr[this.arr.length - 1] };
  }

  /**
   * Returns a new array without duplicates.
   */
  unique(): T[] {
    return [...new Set(this.arr)];
  }

  /**
   * Returns a reversed copy of the array (non-mutating).
   */
  reversed(): T[] {
    return [...this.arr].reverse();
  }

  /**
   * Returns a chunked array with a given size.
   * Example: [1,2,3,4,5], size=2 → [[1,2],[3,4],[5]]
   */
  chunk(size: number): T[][] {
    if (size <= 0) throw new Error("Chunk size must be greater than 0");
    const chunks: T[][] = [];
    for (let i = 0; i < this.arr.length; i += size) {
      chunks.push(this.arr.slice(i, i + size));
    }
    return chunks;
  }

  /**
   * Returns true if all items are unique.
   */
  isUnique(): boolean {
    return new Set(this.arr).size === this.arr.length;
  }

  /**
   * Flattens nested arrays (one level deep).
   */
  flatten(): T[] {
    return this.arr.flat() as T[];
  }

  /**
   * Returns the sum of numeric values.
   */
  sum(this: ArrayUtils<number>): number {
    return this.arr.reduce((acc, n) => acc + n, 0);
  }

  /**
   * Returns the average of numeric values.
   */
  average(this: ArrayUtils<number>): number {
    return this.arr.length ? this.sum() / this.arr.length : 0;
  }

  compact(): T[] {
    return this.arr.filter(Boolean);
  }

  shuffle(): T[] {
    const copy = [...this.arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  random(): T | null {
    if (this.arr.length === 0) return null;
    return this.arr[Math.floor(Math.random() * this.arr.length)];
  }

  // Returns the smallest or largest number in the array.
  min(this: ArrayUtils<number>): number | null {
    if (!this.arr.length) return null;
    return Math.min(...this.arr);
  }

  max(this: ArrayUtils<number>): number | null {
    if (!this.arr.length) return null;
    return Math.max(...this.arr);
  }

  // Groups array items by a selector function.
  groupBy<K extends string | number>(keyFn: (item: T) => K): Record<K, T[]> {
    return this.arr.reduce((acc, item) => {
      const key = keyFn(item);
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {} as Record<K, T[]>);
  }

  // Counts occurrence of each element (or computed key).
  countBy<K extends string | number>(keyFn: (item: T) => K): Record<K, number> {
    return this.arr.reduce((acc, item) => {
      const key = keyFn(item);
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {} as Record<K, number>);
  }

  // Removes all occurrences of a value.
  remove(value: T): T[] {
    return this.arr.filter((v) => v !== value);
  }

  // Removes duplicates based on a selector function.
  distinctBy<K>(keyFn: (item: T) => K): T[] {
    const map = new Map<K, T>();
    for (const item of this.arr) {
      map.set(keyFn(item), item);
    }
    return [...map.values()];
  }

  // Useful in pagination
  take(n: number): T[] {
    return this.arr.slice(0, n);
  }

  skip(n: number): T[] {
    return this.arr.slice(n);
  }

  // Very useful in analytics or dashboards
  median(this: ArrayUtils<number>): number | null {
    if (!this.arr.length) return null;
    const sorted = [...this.arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];
  }

  /**
   * Creates a union of two arrays, removing duplicates.
   * @param other The array to union with
   * @returns A new array containing unique elements from both arrays
   */
  union(other: T[]): T[] {
    return [...new Set([...this.arr, ...other])];
  }
}
