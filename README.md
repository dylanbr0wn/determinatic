# Determinatic

A small library to deterministically generate colors based on a seed.

This is essentially a modular version of [autumn](https://github.com/nluqo/autumn/).

## Usage

Install the library

```bash
npm install determinatic
```

Then import it into your project and use it.

```js
import { determinatic } from "determinatic";

const color = determinatic("my-seed"); //#d2b50a
```
