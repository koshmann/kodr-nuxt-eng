<template>
	<div id="main" class="page bg-gray-dark mx-3">
		<transition name="bounce">
			<loading v-if="$fetchState.pending" />
			<section v-else-if="$fetchState.error || !page" class="mx-3 p-3 py-6 bg-gray-light rounded-2xl">
				<h1 class="text-2xl font-medium mb-4">При загрузке произошла ошибка. Попробуйте перезагрузить страницу или вернуться на главную.</h1>
				<NuxtLink class="btn bg-red text-white" to="/">На главную</NuxtLink>
			</section>
			<section v-else-if="!$fetchState.pending && !$fetchState.error" class="px-3 py-16 bg-gray-light rounded-2xl sm:py-4">
				<div
					class="grid grid-cols-2 justify-between items-baseline pb-4 mb-16 border-gray-medium border-b sm:grid-cols-1 sm:mb-4"
				>
					<h1 class="text-gray-dark text-4xl font-medium sm:text-2xl">
						{{ page.title.rendered }}
					</h1>
				</div>
				<div class="content privacy-policy max-w-3xl" v-html="page.content.rendered" />
			</section>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			slug: this.$route.name,
		}
	},
	async fetch() {
		await this.$store.dispatch('getPages')
	},
	head() {
		if (this.page) {
			return {
				title: this.page._yoast_wpseo_title ? this.page._yoast_wpseo_title : "KODR Agency",
				meta: [
					{ hid: 'description', id: 'description', name: 'description', content: this.page._yoast_wpseo_metadesc ? this.page._yoast_wpseo_metadesc : "KODR Agency" }
				]
			}
		}
	},
	computed: {
		pages() {
			return this.$store.state.pages
		},
		page() {
			return this.pages.find((el) => el.slug === this.slug)
		},
	},
}
</script>

<style lang="scss">
.privacy-policy {
	h1 {
		@apply text-2xl font-medium text-gray-dark mb-4 mt-8; 
	}
	h2 {
		@apply text-2xl font-medium text-gray-dark mb-4 mt-8;
	}
	h3 {
		@apply text-xl font-medium text-gray-dark mb-4 mt-8;
	}
	p {
		@apply mb-2
	}
	ul {
		li {
			@apply mb-2
		}
	}
}

</style>