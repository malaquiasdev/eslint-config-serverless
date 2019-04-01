# eslint-config-sls-bulbasaur

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) created on top of [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

> **Note**: this guide assumes you know how the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) works.

## Install

This module is for advanced users. You probably want to use [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) instead :)

```bash
git+https://github.com/malaquiasdev/eslint-config-sls-bulbasaur.git
```

## Usage

Add the config to either the `package.json`:

```json
{
  "eslintConfig": {
    "extends": "eslint-config-sls-bulbasaur",
    "rules": {
      // your overrides
    }
  }
}
```

or to the `.eslintrc.json` or `.eslintrc.js`:

```json
{
  "extends": "eslint-config-sls-bulbasaur",
  "rules": {
      // your overrides
    }
}
```

## Assumptions

- The ESLint rules are based on the great work of [airbnb's eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- Created to Node.js environment
- Usage of Jest as the test-suite
- `env`: Browser and Node environment
- `globals`: added some related jest variables
- `parser`: usage of babel (used babel-eslint parser)

