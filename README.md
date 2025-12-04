# Array Utils — Lightweight Array Helper Library (JS & TS)

[![npm version](https://img.shields.io/npm/v/arr-lib.svg)](https://npmjs.com/package/arr-lib)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
![types](https://img.shields.io/badge/TypeScript-Ready-blue)

A clean, type-safe, zero-dependency array utility library for JavaScript and TypeScript.
Includes essential helpers like `unique`, `chunk`, `shuffle`, `flatten`, `sum`, and more.

---

## Features

- Zero dependencies
- Strong TypeScript types
- Fast & efficient algorithms
- Clean class-based API
- Works in Node.js & Browser

---

## Installation

```bash
npm install arr-lib
# or
yarn add arr-lib
# or
pnpm add arr-lib
```

---

## Quick Start (JavaScript)

```js
const { ArrayUtils } = require("arr-lib");

const utils = new ArrayUtils([1, 2, 3, 3, 4]);

console.log(utils.unique()); // [1, 2, 3, 4]
console.log(utils.getFirstAndLast()); // { first: 1, last: 4 }
console.log(utils.chunk(2)); // [[1,2],[3,3],[4]]
```

---

## Quick Start (TypeScript)

```ts
import { ArrayUtils } from "arr-lib";

const arr = new ArrayUtils([10, 20, 30]);

console.log(arr.sum()); // 60
console.log(arr.average()); // 20
console.log(arr.shuffle());
```

---

# API Documentation

### `new ArrayUtils<T>(array: T[])`

Creates an instance.

---

### Methods

#### 🔹 `getFirstAndLast()`

Returns first & last element.

#### 🔹 `unique()`

Removes duplicates.

#### 🔹 `reversed()`

Reversed copy (non-mutating).

#### 🔹 `chunk(size)`

Splits into chunks.

#### 🔹 `isUnique()`

Checks if all values are unique.

#### 🔹 `flatten()`

Flattens arrays one level.

#### 🔹 `sum()`

Sum of numbers.

#### 🔹 `average()`

Average of numbers.

#### 🔹 `compact()`

Removes falsy values.

#### 🔹 `shuffle()`

Randomizes array order.

#### 🔹 `random()`

Returns a random item.

#### 🔹 `min() / max()`

Returns smallest or largest number.

#### 🔹 `median()`

Returns middle value from a numeric array.

#### 🔹 `groupBy(fn)`

Groups items by key.

#### 🔹 `countBy(fn)`

Counts items based on criteria.

#### 🔹 `distinctBy(fn)`

Removes duplicates based on a custom selector.

#### 🔹 `remove(value)`

Removes all matching values.

#### 🔹 `take(n) / skip(n)`

Useful for slicing, pagination.

---

# 🗂 Project Structure

```
src/
 ├─ arrayUtils.ts
 └─ index.ts
dist/
package.json
tsconfig.json
README.md
LICENSE
```

---

# Contributing

PRs and feature requests are welcome!
Feel free to open issues or submit improvements.

---

# 📄 License

MIT — free for personal & commercial use.
