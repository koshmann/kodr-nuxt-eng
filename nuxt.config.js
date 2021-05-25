// import axios from 'axios'
// let dynamicProjectRoutes = () => {
// 	return axios
// 		.get('https://dev.kodr.agency/wp-json/wp/v2/projects?_fields=slug')
// 		.then((res) => {
// 			return res.data.map((project) => `/project/${project.slug}`)
// 		})
// }
// let dynamicPageRoutes = () => {
// 	return axios
// 		.get('https://dev.kodr.agency/wp-json/wp/v2/pages?_fields=slug')
// 		.then((res) => {
// 			return res.data.map((page) => `/${page.slug}`)
// 		})
// }
// let dynamicProjectTagRoutes = () => {
// 	return axios
// 		.get('https://dev.kodr.agency/wp-json/wp/v2/tags?_fields=slug')
// 		.then((res) => {
// 			return res.data.map((tag) => `/${tag.slug}`)
// 		})
// }

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'KODR Agency',
		htmlAttrs: {
			lang: 'ru',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'Дизайн. Интерфейсы. 3D графика. Диджитал.',
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/fonts.css',
		'~/assets/components.scss',
		'~/assets/route-transitions.css',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ['~/plugins/vue-tel-input.js'],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	tailwindcss: {
		jit: true,
	},
	purgeCSS: {
		enabled: false,
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: ['gsap', 'gsap/Draggable'],
		babel: {
			plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
		},
	},
	layoutTransition: 'bounce',
	pageTransition: 'bounce',
	// generate: {
	// 	routes: [dynamicProjectRoutes, dynamicPageRoutes],
	// },
}
