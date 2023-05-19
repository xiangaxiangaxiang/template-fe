module.exports = {
    root: true,
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
        ecmaFeatures: {
            es6: true,
            experimentalObjectRestSpread: true,
            jsx: true,
            arrowFunctions: true,
            classes: true,
            modules: true,
            defaultParams: true,
        },
    },
    plugins: [
        'vue',
        '@typescript-eslint',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': ['error', 4], // 缩进
        'quotes': ['error', 'single'], // 单引号
        'comma-dangle': ['error', 'always-multiline'], // 对象结尾逗号
        'comma-style': ['error', 'last'],
        'arrow-parens': ['error', 'as-needed'],
        'semi': ['error', 'never'],
        'space-before-function-paren': ['error', 'never'],
        '@typescript-eslint/no-var-requires': 0,
        'vue/multi-word-component-names': [
            'error',
            {ignores: ['index']},
        ],
        'vue/no-irregular-whitespace': ['error', {
            skipStrings: true,
            skipComments: true,
            skipRegExps: true,
            skipTemplates: true,
            skipHTMLAttributeValues: false,
            skipHTMLTextContents: false,
        }], 
    },
}