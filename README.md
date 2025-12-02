# Array Utils — Lightweight Array Helper (JS & TS)

A clean, zero-dependency utility library for working with arrays in JavaScript and TypeScript. Includes functions like `unique`, `chunk`, `shuffle`, `flatten`, `average`, and more.

## 🚀 Installation

```bash
npm install array-utils-nazmul
```

## 🔰 Quick Usage (JavaScript)

```js
const { ArrayUtils } = require("array-utils-nazmul");

const utils = new ArrayUtils([1, 2, 3, 3, 4]);

console.log(utils.unique()); // [1, 2, 3, 4]
console.log(utils.getFirstAndLast()); // { first: 1, last: 4 }
console.log(utils.chunk(2)); // [[1,2],[3,3],[4]]
```

## 🔰 Quick Usage (TypeScript)

```ts
import { ArrayUtils } from "array-utils-nazmul";

const arr = new ArrayUtils([10, 20, 30]);

console.log(arr.sum()); // 60
console.log(arr.average()); // 20
console.log(arr.shuffle());
```

---

## 📚 API Overview

### `new ArrayUtils<T>(array: T[])`

Creates an instance.

---

### Methods

#### `getFirstAndLast()`

Returns:

```ts
{ first: T | null, last: T | null }
```

#### `unique()`

Removes duplicates.

#### `reversed()`

Returns reversed copy.

#### `chunk(size: number)`

Splits array into chunks.

#### `isUnique()`

Checks if all values are unique.

#### `flatten()`

Flattens nested arrays (1 level).

#### `sum()` _(numbers only)_

Returns sum.

#### `average()` _(numbers only)_

Returns mean.

#### `compact()`

Removes falsy values.

#### `shuffle()`

Shuffles array.

#### `random()`

Returns random element.

---

## 📝 License

MIT
