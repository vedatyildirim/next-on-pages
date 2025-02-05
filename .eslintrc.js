module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/no-explicit-any': 'error',
		'no-case-declarations': 'error',
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'@typescript-eslint/no-unused-vars': ['error'],
		'prefer-const': 'error',
	},
};
