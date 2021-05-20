module.exports = {
	mode: 'jit',
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#fff',
			red: {
				DEFAULT: '#FF3300',
			},
			gray: {
				light: '#F2F2F2',
				medium: '#E0E0E0',
				DEFAULT: '#828282',
				darker: '#4f4f4f',
				dark: '#333333',
			},
			black: '#333',
		},
		fontFamily: {
			title: ['TT Firs Neue', 'sans-serif'],
			body: ['TT Firs Neue', 'sans-serif'],
		},
		screens: {
			'sm': {'min': '300px', 'max': '767px'},
			'md': {'min': '768px', 'max': '1023px'},
			'lg': {'min': '1024px', 'max': '1279px'},
			'xl': {'min': '1280px', 'max': '1535px'},
			'2xl': {'min': '1536px'},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
