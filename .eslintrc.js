module.exports = {
  "root": true,
  "extends": "eslint:recommended",
  "env": {
    "browser": false,
    "es6": true,
    "node": true
  },
  'parserOptions': {
    'ecmaVersion': 2018
  },
  "rules": {
    "object-curly-spacing": [0, "never"],
    "strict": [2, "global"],
    "quotes": [2, "single", "avoid-escape"],
    "semi": [2, "always"],
    "space-before-function-paren": [ 2, "always" ],
    "space-infix-ops": 2,
    "spaced-comment": [2, "always"],
    "arrow-spacing": 2,
    "no-console": 0,
    "no-var": 0,
    "no-undef": 1,
    "no-unused-vars": 0
  }
};
