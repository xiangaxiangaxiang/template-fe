// @ts-check
module.exports = {
    extends: [
      'stylelint-config-standard',
      'stylelint-config-prettier',
      'stylelint-config-html/vue',
    ],
    overrides: [
      {
        files: ['**/*.less'],
        customSyntax: 'postcss-less',
      },
      {
        files: ['**/*.vue'],
        customSyntax: 'postcss-html',
      },
    ],
    rules: {
      'selector-class-pattern': [
        '^([a-z][a-z0-9]*)([-_a-z0-9]+)*$',
        {
          message: selector =>
            `Expected class selector "${selector}" to be kebab-case`,
        },
      ],
      'selector-pseudo-class-no-unknown': [
        true,
        {
          ignorePseudoClasses: ['deep'],
        },
      ],
    },
    ignoreFiles: [
      '**/dist',
      '**/node_modules',
      '**/public',
      'package.json'
    ],
  }
  