# eslint-config-sls-bulbasaur

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) created on top of [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## Install

This module is for advanced users. You probably want to use [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) instead :)

```bash
git+https://github.com/malaquiasdev/eslint-config-sls-bulbasaur.git
```

## Usage

### ESLint:

Add the config to either the `package.json`:

```json
{
  "eslintConfig": {
    "extends": "eslint-config-sls-bulbasaur",
    "rules": {
      //your overrides
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

#### Ignoring Files and Directories:

You can tell ESLint to ignore specific files and directories by copying my .eslintignore file in your project’s root directory.

```sh
cp node_modules/eslint-config-sls-bulbasaur/.eslintignore .
```

### EditorConfig:

If you are using the **EditorConfig** plugin in your IDE, you can copy the file to the root folder of your project:

```sh
cp node_modules/eslint-config-sls-bulbasaur/.editorconfig .
```

### Prettier:

If you are using the **Prettir** plugin in your IDE, you can copy the file to the root folder of your project:

```sh
cp node_modules/eslint-config-sls-bulbasaur/.prettierrc .
```

## Assumptions

- The ESLint rules are based on the great work of [airbnb's eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- Created to Node.js environment
- Usage Jest as the test-suite and it's already set up for you
- `env`: Node environment
- `globals`: added some related jest variables

## LICENCE

[MIT](LICENCE)

## Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/malaquiasdev">
          <img width="150" height="150" src="https://avatars0.githubusercontent.com/u/19865835?s=460&v=4">
          </br>
          Mateus Malaquias
        </a>
        <div>
          <a href="https://twitter.com/malaquiasdev">
            <img src="https://img.shields.io/twitter/follow/malaquiasdev.svg?style=social&label=Follow" />
          </a>
        </div>
      </td>
    </tr>
  <tbody>
</table>
