export const state = () => ({
	projects: [],
	tags: [],
	pages: [],
	overlay: false,
	mobileMenu: false
})

export const getters = {
	getterValue: (state) => {
		return state.value
	},
}

export const mutations = {
	updateProjects: (state, projects) => {
		state.projects = projects
	},
	updateTags: (state, tags) => {
		state.tags = tags
	},
	updatePages: (state, pages) => {
		state.pages = pages
	},
	toggleOverlay: (state, val) => {
		state.overlay = val
	},
	toggleMobileMenu: (state, val) => {
		state.mobileMenu = val
	}
}

export const actions = {
	async getProjects({ state, commit }) {
		if (state.projects.length) return
		try {
			let projects = await fetch(`https://dev.kodr.agency/wp-json/wp/v2/projects?page=1&per_page=12&_embed=wp:featuredmedia,wp:term`
			).then(res => res.json())
			projects = projects
				.filter(el => el.status === "publish")
			commit("updateProjects", projects)
		} catch (err) {
			console.log(err)
		}
	},
	async getTags({ state, commit }) {
		if (state.tags.length) return
		try {
			let tags = await fetch(`https://dev.kodr.agency/wp-json/wp/v2/tags`
			).then(res => res.json())
			tags = tags
				.map(({ id, count, link, name, slug }) => ({
					id,
					count,
					link,
					name,
					slug
				}))
			commit("updateTags", tags)
		} catch (err) {
			console.log(err)
		}
	},
	async getPages({ state, commit }) {
		if (state.pages.length) return
		try {
			let pages = await fetch(`https://dev.kodr.agency/wp-json/wp/v2/pages`
			).then(res => res.json())
			pages = pages
				.filter(el => el.status === "publish")
			commit("updatePages", pages)
		} catch (err) {
			console.log(err)
		}
	},
	setOverlay({commit}, val) {
		commit("toggleOverlay", val)
	},
	setMobileMenu({commit}, val) {
		commit("toggleMobileMenu", val)
	}
}