# Determinatic

## What is this

A small library to deterministically generate colors based on a seed.

This is essentially a library version of [autumn](https://github.com/nluqo/autumn/).

Written in TS for all that type safety goodnesss 🤤.

## Usage

Install the library

```bash
npm install determinatic
```

Then import it into your project and use it.

```ts
import { Determinatic } from "determinatic";

const determinatic = Determinatic({
  /* options */
});

determinatic.getColor("my-seed"); //#d2b50a
```
