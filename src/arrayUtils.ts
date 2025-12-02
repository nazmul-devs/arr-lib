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
}
