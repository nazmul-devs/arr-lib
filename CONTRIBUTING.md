# Contributing to Array Utils

Thank you for your interest in contributing to **Array Utils**!
Your help is welcome — whether it's reporting bugs, suggesting new features, or submitting pull requests.

This guide explains how to contribute effectively.

---

# 📌 Ways You Can Contribute

### ✅ Report Bugs

If you find an issue, please open a GitHub Issue with:

- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Code snippets (if applicable)

### ✅ Suggest Features

We welcome utility function ideas!
Please open an Issue describing:

- What the feature does
- Why it is useful
- Example usage

### ✅ Submit Pull Requests

You can improve documentation, code, examples, or add new utilities.

---

# 🛠 Development Setup

### 1. Fork the repository

Click the **Fork** button at the top-right of the repo.

### 2. Clone your fork

```bash
git clone https://github.com/<your-username>/arr-lib.git
cd arr-lib
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start development

Make changes inside the **src/** folder.

### 5. Build the project

```bash
npm run build
```

### 6. Run lint (optional)

(If linting is added later)

```bash
npm run lint
```

---

# 🔥 Code Guidelines

### ✔ Use TypeScript

All source code lives in the `src/` folder and must be written in TypeScript.

### ✔ Keep the code simple & readable

- Use meaningful function and variable names
- Prefer pure functions / immutable operations
- Avoid unnecessary complexity

### ✔ Follow the existing style

Try to match formatting already used in the project.

### ✔ Add comments for complex logic

Document _why_, not just _what_, if needed.

---

# 📚 Adding a New Utility Function

If you want to add a new array method:

1. Add the method inside `ArrayUtils` class
2. Write TypeScript types
3. Add JSDoc comment with description & example
4. Update README (API documentation section)
5. Ensure your code compiles (`npm run build`)

---

# 🧪 Testing

Unit tests may be added later.
If tests exist during your contribution, ensure:

```bash
npm test
```

runs successfully before submitting a PR.

---

# 🔀 Submitting a Pull Request

1. Create a feature branch:

```bash
git checkout -b feature/my-new-feature
```

2. Commit clearly:

```bash
git commit -m "Add new method: compact()"
```

3. Push your branch:

```bash
git push origin feature/my-new-feature
```

4. Open a Pull Request (PR) on GitHub:

- Include screenshots or examples if needed
- Explain what your PR changes

We will review your PR as soon as possible.

---

# ❤️
