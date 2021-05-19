<template>
	<main class="project individual">
		<transition name="bounce">
			<loading v-if="$fetchState.pending" />
			<section v-else-if="$fetchState.error">An error occurred :(</section>
			<section v-else-if="!$fetchState.pending && !$fetchState.error" class="px-3 mx-3 pt-16 pb-16 bg-gray-light rounded-2xl">
				<div
					class="grid grid-cols-2 justify-between items-baseline pb-4 mb-16 border-gray-medium border-b"
				>
					<h2 class="text-gray-dark text-4xl font-medium">
						{{ project.title.rendered }}
					</h2>
					<div class="relative text-gray text-right">
						<div
							v-if="project._embedded['wp:term']"
							class="flex justify-end text-gray-dark"
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
				<div class="content" v-html="project.content.rendered"></div>
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
	fetchDelay: 500,
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
