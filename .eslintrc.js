module.exports = {
    plugins: [
      "@typescript-eslint",
      "eslint-comments",
      "jest",
      "promise",
      "unicorn",
    ],
    extends: [
      "airbnb-typescript/base",
      "plugin:@typescript-eslint/recommended",
      "plugin:eslint-comments/recommended",
      "plugin:jest/recommended",
      "plugin:promise/recommended",
      "plugin:unicorn/recommended",
      "prettier",
      "prettier/@typescript-eslint",
    ],
    env: {
      node: true,
      jest: true,
    },
    rules: {
      // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
      "no-prototype-builtins": "off",
      // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
      "eslint-comments/disable-enable-pair": ["error", {"allowWholeFile": true}],
      "import/prefer-default-export": "off",
      "import/no-default-export": "off",
      // Use function hoisting to improve code readability
      "no-use-before-define": [
        "error",
        { functions: false, classes: true, variables: true },
      ],
      // Makes no sense to allow type inferrence for expression parameters, but require typing the response
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        { allowExpressions: true, allowTypedFunctionExpressions: true },
      ],
      "@typescript-eslint/no-use-before-define": [
        "error",
        { functions: false, classes: true, variables: true, typedefs: true },
      ],
      // Common abbreviations are known and readable
      "unicorn/prevent-abbreviations": "off",
    },
  }
  