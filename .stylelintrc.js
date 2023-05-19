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
      'selector-pseudo-class-no-unknown': [
        true,
        {
          ignorePseudoClasses: ['deep'],
        },
      ],
      "selector-class-pattern": "^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?([a-z][a-z0-9]*)([\-a-z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$",
      "color-named": "never",
      "color-no-invalid-hex": true,
      "block-no-empty": true,
      "color-hex-length": "short",
      "unit-no-unknown": true,
      "value-keyword-case": "lower",
      "shorthand-property-no-redundant-values": true,
      "declaration-block-no-duplicate-properties": true,
      "declaration-block-no-shorthand-property-overrides": true,
      "declaration-block-single-line-max-declarations": 1,
      "comment-no-empty": true,
      "no-duplicate-selectors": true,
      "indentation": 4,
      "color-no-invalid-hex": true,
      "no-eol-whitespace": true,
      "rule-empty-line-before": "always-multi-line"
    },
    ignoreFiles: [
      '**/dist',
      '**/node_modules',
      '**/public',
      'package.json'
    ],
  }
  