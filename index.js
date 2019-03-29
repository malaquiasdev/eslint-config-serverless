module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['warn'],
    'arrow-body-style': 'off',
    'function-paren-newline': 'off',
    complexity: ['warn', 5],
    'max-statements': ['warn', {max: 10}],
    'max-statements-per-line': ['warn', {max: 1}],
    'max-nested-callbacks': ['warn', {max: 2}],
    'max-depth': ['warn', {max: 2}],
    'max-lines': ['warn', {max: 50, skipComments: true}],
    'max-len': ['warn', 120, {ignoreUrls: true}],
    'max-params': ['warn', 3],
    'no-param-reassign': [
      'warn',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'item', // for map interator
          'e', // for e.returnvalue
          'module', // for curry functions
          'req', // for requests obj
          'request', // for requests obj
          'res', // for responses obj
          'response', // for response obj
        ],
      },
    ],
  },
  globals: {
    describe: true,
    expect: true,
    it: true,
    jest: true,
  },
  env: {
    es6: true,
    jest: true,
    node: true,
  },
};
