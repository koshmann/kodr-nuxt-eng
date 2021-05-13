<template>
	<main class="project individual">
		<transition name="bounce">
			<loading v-if="$fetchState.pending" />
			<section v-else-if="$fetchState.error">An error occurred :(</section>
			<section v-else class="px-3 mx-3 pt-16 pb-36 bg-gray-light rounded-2xl">
				<div
					class="grid grid-cols-2 justify-between items-baseline pb-4 mb-16 border-gray-medium border-b"
				>
					<h2 class="text-gray-dark text-4xl font-medium"> {{ project.title.rendered }}</h2>
					<div class="text-gray text-right">
						<p>Будем рады познакомиться!</p>
					</div>
				</div>
				<div v-html="project.content.rendered"></div>
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
	fetchDelay: 2000,
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
