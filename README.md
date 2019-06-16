# eslint-config-serverless

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) created on top of [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

> **Note**: I wrote a text explaining the rules applied by this project in Portuguese. [Meu Controle De Qualidade Para Projetos Serverless Com Node.js](https://malaquias.dev/2019/Meu-controle-de-qualidade-para-projetos-serverless-com-Node.js/)

## Install

This module is for advanced users. You probably want to use [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) instead :)

```bash
npm i eslint-config-serverless
```

## Usage

### NPM Script:

```json
"scripts": {
  "test": "npm run test:memory && npm run test:unit",
  "test:unit": "jest --env=node --coverage",
  "test:memory": "jest --env=node --logHeapUsage",
  "test:report": "npm run test:unit --coverageDirectory='coverage' --coverageReporters='html'",
  "lint": "eslint --format codeframe src",
  "lint:report": "eslint -c .eslintrc.json -f html src/** > eslint.html"
},
```

### ESLint:

Add the config to either the `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@malaquiasdev/eslint-config-serverless",
    "rules": {
      //your overrides
    }
  }
}
```

or to the `.eslintrc.json` or `.eslintrc.js`:

```json
{
  "extends": "@malaquiasdev/eslint-config-serverless",
  "rules": {
      // your overrides
    }
}
```

#### Ignoring Files and Directories:

You can tell ESLint to ignore specific files and directories by copying my .eslintignore file into your project’s root directory.

```sh
cp node_modules/@malaquiasdev/eslint-config-serverless/.eslintignore .
```

### EditorConfig:

If you are using the **EditorConfig** plugin in your IDE, you can copy the file into the root folder of your project:

```sh
cp node_modules/@malaquiasdev/eslint-config-serverless/.editorconfig .
```

### Prettier:

If you are using the **Prettier** plugin in your IDE, you can copy the file into the root folder of your project:

```sh
cp node_modules/@malaquiasdev/eslint-config-serverless/.prettierrc .
```
### JestConfig:

If you are using the **Jest**, you can copy the file into the root folder of your project:

```sh
cp node_modules/eslint-config-api-client/jest.config.js .
```

## Assumptions

- The ESLint rules are based on the great work of [airbnb's eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- Created for Node.js environment
- Jest as the test-suite. It's already set up for you
- Prettier as code formatter. It's already set up for you
- `env`: Node environment
- `globals`: added some jest-related variables

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
