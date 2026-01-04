# arr-lib - Zero-Dependency Array Utility Library

[![npm version](https://img.shields.io/npm/v/arr-lib.svg)](https://npmjs.com/package/arr-lib)
[![npm downloads](https://img.shields.io/npm/dm/arr-lib.svg)](https://npmjs.com/package/arr-lib)
[![license](https://img.shields.io/npm/l/arr-lib.svg)](LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/arr-lib)](https://bundlephobia.com/result?p=arr-lib)
![types](https://img.shields.io/npm/types/arr-lib)

A lightweight, type-safe array utility library for JavaScript and TypeScript with zero dependencies. Provides essential array operations through intuitive APIs for both functional and class-based usage.

## ✨ Key Features

- **Zero Dependencies**: Lightweight with no external dependencies
- **TypeScript Ready**: Full TypeScript support with comprehensive type definitions
- **Dual API Approach**: Both class-based (`ArrayUtils`) and functional (`arrSum`, `arrShuffle`, etc.) APIs
- **Universal Compatibility**: Works seamlessly in Node.js, browsers, and modern bundlers
- **Tree-Shakeable**: Import only what you need to minimize bundle size
- **Well Tested**: Reliable and production-ready utilities
- **ES Modules & CommonJS**: Support for both module systems

## 📦 Installation

```bash
# Using npm
npm install arr-lib

# Using yarn
yarn add arr-lib

# Using pnpm
pnpm add arr-lib
```

## ⚡ Quick Start

### Class-Based API (Recommended)

```javascript
// JavaScript
const { ArrayUtils } = require("arr-lib");

const utils = new ArrayUtils([1, 2, 2, 3, 4, 5]);

console.log(utils.unique()); // [1, 2, 3, 4, 5]
console.log(utils.chunk(2)); // [[1, 2], [2, 3], [4, 5]]
console.log(utils.sum()); // 15 (for numeric arrays)
console.log(utils.getFirstAndLast()); // { first: 1, last: 5 }
```

```typescript
// TypeScript
import { ArrayUtils } from "arr-lib";

const numbers = new ArrayUtils([10, 20, 30, 40]);
console.log(numbers.average()); // 25
console.log(numbers.shuffle()); // Randomized order

const strings = new ArrayUtils(["a", "b", "a", "c"]);
console.log(strings.distinctBy((s) => s)); // ['a', 'b', 'c']
```

### Functional API

```javascript
// JavaScript
const { arrSum, arrShuffle, arrMin, arrMax } = require("arr-lib");

const data = [1, 5, 3, 9, 2];
console.log(arrSum(data)); // 20
console.log(arrMin(data)); // 1
console.log(arrMax(data)); // 9
console.log(arrShuffle(data)); // Randomized order
```

## 🛠 Available Methods

### ArrayUtils Class Methods

| Method                     | Description                        |
| -------------------------- | ---------------------------------- |
| `new ArrayUtils<T>(array)` | Create an instance with your array |
| `getFirstAndLast()`        | Get first and last elements        |
| `unique()`                 | Remove duplicate values            |
| `reversed()`               | Non-mutating reverse               |
| `chunk(size)`              | Split array into chunks            |
| `isUnique()`               | Check if all values are unique     |
| `flatten()`                | Flatten nested arrays (one level)  |
| `sum()`                    | Calculate sum (numeric arrays)     |
| `average()`                | Calculate average (numeric arrays) |
| `compact()`                | Remove falsy values                |
| `shuffle()`                | Randomize array order              |
| `random()`                 | Get a random element               |
| `min()` / `max()`          | Find minimum/maximum value         |
| `median()`                 | Calculate median value             |
| `groupBy(fn)`              | Group elements by key function     |
| `countBy(fn)`              | Count elements by criteria         |
| `distinctBy(fn)`           | Remove duplicates by selector      |
| `remove(value)`            | Remove all matching values         |
| `union(other)`             | Create union of two arrays         |
| `take(n)` / `skip(n)`      | Pagination helpers                 |

### Standalone Functions

| Function                             | Description               |
| ------------------------------------ | ------------------------- |
| `arrSum(array)`                      | Sum of numeric values     |
| `arrAverage(array)`                  | Average of numeric values |
| `arrMin(array)` / `arrMax(array)`    | Min/max values            |
| `arrFirst(array)` / `arrLast(array)` | First/last elements       |
| `arrRandom(array)`                   | Random element            |
| `arrShuffle(array)`                  | Shuffle array             |
| `arrUnion(array, other)`             | Union of two arrays       |

## 📖 Examples

### Data Processing

```typescript
import { ArrayUtils } from "arr-lib";

interface User {
  id: number;
  name: string;
  department: string;
  salary: number;
}

const users = new ArrayUtils<User>([
  { id: 1, name: "Alice", department: "Engineering", salary: 80000 },
  { id: 2, name: "Bob", department: "Marketing", salary: 60000 },
  { id: 3, name: "Charlie", department: "Engineering", salary: 90000 },
]);

// Group by department
const byDept = users.groupBy((u) => u.department);
// { Engineering: [...], Marketing: [...] }

// Average salary by department
const avgSalaries = users
  .groupBy((u) => u.department)
  .map(([dept, employees]) => ({
    department: dept,
    averageSalary: new ArrayUtils(employees.map((e) => e.salary)).average(),
  }));
```

### Pagination

```typescript
const { ArrayUtils } = require("arr-lib");

const items = new ArrayUtils(Array.from({ length: 100 }, (_, i) => i + 1));
const pageSize = 10;
const currentPage = 3;

const pageData = items.skip((currentPage - 1) * pageSize).take(pageSize);
// [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
```

### Array Union Operations

```typescript
import { ArrayUtils } from "arr-lib";

// Class-based API
const utils = new ArrayUtils([1, 2, 3]);
const other = [3, 4, 5];
console.log(utils.union(other)); // [1, 2, 3, 4, 5]

// Functional API
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
console.log(arrUnion(arr1, arr2)); // [1, 2, 3, 4, 5]

// Works with objects too
interface User {
  id: number;
  name: string;
}

const teamA = new ArrayUtils<User>([
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
]);

const teamB = [
  { id: 2, name: "Bob" }, // duplicate
  { id: 3, name: "Charlie" },
];

console.log(teamA.union(teamB));
// [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]
```

## 🎯 Why arr-lib?

1. **Lightweight**: No bloated dependencies, just the essentials
2. **Type Safe**: Comprehensive TypeScript definitions for better developer experience
3. **Flexible**: Both class-based and functional APIs to suit your coding style
4. **Well Documented**: Clear examples and consistent API design
5. **Performance Focused**: Efficient algorithms optimized for real-world usage

## 📦 Bundle Size

| Import Type          | Size          |
| -------------------- | ------------- |
| Full Library         | < 3KB gzipped |
| Individual Functions | < 500B each   |

## 🛡️ TypeScript Support

Full TypeScript support with generic types for enhanced type safety:

```typescript
import { ArrayUtils } from "arr-lib";

interface Product {
  id: number;
  name: string;
  price: number;
}

const products = new ArrayUtils<Product>([
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 599 },
]);

// TypeScript knows the return type will be Product[]
const expensive = products.take(1);

// Type-safe operations
const totalPrice = products.sum((p) => p.price); // Error: sum expects numbers
const prices = products.map((p) => p.price); // Extract prices first
const total = new ArrayUtils(prices).sum(); // Now works correctly
```

## 🌍 Environment Support

- Node.js (12+)
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Bundlers (Webpack, Rollup, Vite, Parcel)
- TypeScript projects

## 🤝 Contributing

Contributions are welcome! Please see our [contributing guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## 📄 License

MIT © [Nazmul Hosen](https://github.com/nazmul-devs)

See [LICENSE](LICENSE) for more information.

## 🔗 Related Projects

- [lodash](https://lodash.com/) - A modern JavaScript utility library
- [ramda](https://ramdajs.com/) - Practical functional JavaScript
