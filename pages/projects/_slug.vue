<template>
	<main class="project individual">
		<transition name="bounce">
			<loading v-if="$fetchState.pending" />
			<section v-else-if="$fetchState.error || !project" class="mx-3 p-3 py-6 bg-gray-light rounded-2xl">
				<h1 class="text-2xl font-medium mb-4">При загрузке произошла ошибка. Попробуйте перезагрузить страницу или вернуться на главную.</h1>
				<NuxtLink class="btn bg-red text-white" to="/">На главную</NuxtLink>
			</section>
			<section v-else-if="!$fetchState.pending && !$fetchState.error" class="px-3 mx-3 py-16 bg-gray-light rounded-2xl sm:py-4">
				<div
					class="grid grid-cols-2 justify-between items-baseline pb-4 mb-16 border-gray-medium border-b sm:grid-cols-1 sm:mb-4"
				>
					<h2 class="text-gray-dark text-4xl font-medium sm:text-2xl">
						{{ project.title.rendered }}
					</h2>
					<div class="relative text-gray text-right">
						<div
							v-if="project._embedded['wp:term']"
							class="flex justify-end text-gray-dark sm:justify-start sm:mt-3"
						>
							<nuxt-link
								v-for="tag in project._embedded['wp:term'][1]"
								:key="tag.id"
								:to="`/tags/${tag.slug}`"
								class="tag !px-3 !py-2 text-sm border-gray-medium bg-opacity-80 hover:bg-opacity-100 hover:border-gray-dark hover:bg-gray-dark"
							>
								{{ tag.name }}
							</nuxt-link>
						</div>
					</div>
				</div>
				<div class="content" v-html="project.content.rendered" />
			</section>
		</transition>
	</main>
</template>
<script>
export default {
	data() {
		return {
			slug: this.$route.params.slug,
		}
	},
	async fetch() {
		await this.$store.dispatch('getProjects')
	},
	head () {
		if (this.project) {
			return {
				title: this.project._yoast_wpseo_title ? this.project._yoast_wpseo_title : "KODR Agency",
				meta: [
					{ hid: 'description', id: 'description', name: 'description', content: this.project._yoast_wpseo_metadesc }
				]
			}
		}
	},
	computed: {
		projects() {
			return this.$store.state.projects
		},
		project() {
			return this.projects.find((el) => el.slug === this.slug)
		},
	},
}
</script>
