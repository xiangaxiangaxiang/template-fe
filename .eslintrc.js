const prettierConfig = require('./.prettierrc.js')

module.exports = {
    root: true,
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:import/recommended',
        'plugin:import/typescript',
        '@vue/eslint-config-typescript/recommended',
        '@vue/eslint-config-prettier',
    ],
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
    'parser': 'vue-eslint-parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
        'parser': '@typescript-eslint/parser',
    },
    'plugins': [
        'vue',
        '@typescript-eslint'
    ],
    'rules': {
        'prettier/prettier': ['error', prettierConfig],
        'indent': [
            'error',
            4
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        '@typescript-eslint/no-var-requires': 0,
        'vue/multi-word-component-names': [
            'error',
            {ignores: ['index']}
        ]
    }
}
