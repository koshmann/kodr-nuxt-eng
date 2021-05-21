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
	plugins: ['vue'],
	rules: {
		'vue/html-indent': ['error', 'tab'],
		indent: ['error', 'tab'],
		'vue/singleline-html-element-content-newline': 'off',
		'vue/multiline-html-element-content-newline': 'off',
		'vue/no-v-html': 'off',
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: {
					max: 7,
					allowFirstLine: true,
				},
				multiline: {
					max: 7,
					allowFirstLine: true,
				},
			},
		],
		'vue/html-closing-bracket-newline': [
			'error',
			{
				singleline: 'never',
				multiline: 'always',
			},
		],
	},
	settings: {
		'import/resolver': {
			nuxt: {
				extensions: ['.js', '.vue'],
			},
		},
	},
}
