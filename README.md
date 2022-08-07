# Determinatic

### 🚧 This is a work in progress!🚧

I have yet to settle on an API for this library, so use at your own risk.

## What is this

A small library to deterministically generate colors based on a seed.

This is essentially a modular version of [autumn](https://github.com/nluqo/autumn/).

Written in TS 🤤.

## Usage

Install the library

```bash
npm install determinatic
```

Then import it into your project and use it.

```js
import { determinatic } from "determinatic";

const determinatic = determinatic({
  /* options */
});

determinatic.getColor("my-seed"); //#d2b50a
```
