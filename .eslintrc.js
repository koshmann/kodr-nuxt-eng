module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:vue/vue3-recommended',
		'plugin:nuxt/recommended',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'vue',
	],
	rules: {
		"vue/html-indent": ["error", "tab"],  // enforce tabs in template
		"indent": ["error", "tab"]            // enforce tabs in script and js files
	},
	settings: {
		'import/resolver': {
			nuxt: {
				extensions: ['.js', '.vue'],
			},
		},
	},
};