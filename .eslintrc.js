module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    globals: {
        afterAll: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        beforeEach: "readonly",
        describe: "readonly",
        expect: "readonly",
        test: "readonly"
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint']
};
