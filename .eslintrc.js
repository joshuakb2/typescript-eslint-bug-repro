module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname + '/ts',
        project: [
            'app/tsconfig.json',
            'lib/tsconfig.json',
        ],
        // typescript-eslint support for TS project references is partially supported
        EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
    },
    plugins: [
        '@typescript-eslint'
    ],
    ignorePatterns: [
        '.eslintrc.js',
    ],
};
