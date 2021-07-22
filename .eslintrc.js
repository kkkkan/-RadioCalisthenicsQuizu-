module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/essential',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    plugins: ['simple-import-sort'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: true,
                trailingComma: 'es5',
                jsxBracketSameLine: true,
            },
        ],
        indent: ['error', 2, { SwitchCase: 1 }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        'no-console': 'off',
        'no-debugger': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
    },
};
