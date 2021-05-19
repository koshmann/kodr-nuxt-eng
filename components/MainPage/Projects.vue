<template>
	<section class="px-3 py-6 bg-gray-light rounded-2xl my-2">
		<div
			class="flex justify-between items-center pb-3 mb-6 border-gray-medium border-b"
		>
			<h2 class="text-3xl font-title font-medium text-gray max-w-xs leading-7">
				<span class="text-gray-dark">Проекты,</span>
				<span>которыми мы гордимся</span>
			</h2>
			<a
				href="#"
				class="btn text-gray border-gray-medium hover:border-gray-dark hover:bg-gray-dark hover:text-gray-light"
			>
				<span class="mr-4">Все проекты</span>
				<svg width="4" height="7" viewBox="0 0 4 7" fill="none">
					<path d="M0 0L4 3.5L0 7V0Z" fill="currentColor" />
				</svg>
			</a>
		</div>

		<div class="grid grid-cols-2 gap-6">
			<div v-for="project in projects" :key="project.id" class="card single-project">
				<div class="group">
					<div
						class="rounded-lg overflow-hidden project-cover relative pt-[60%]"
					>
						<nuxt-link :to="`/projects/${project.slug}`">
							<img
								v-if="project._embedded['wp:featuredmedia']"
								:src="project._embedded['wp:featuredmedia'][0].source_url"
								class="absolute top-0 left-0 h-full object-cover w-full transition duration-500 ease-in-out group-hover:transform group-hover:scale-110"
								alt=""
							>
							<div class="absolute top-4 left-4">
								<h3 class="font-title font-medium text-xl mb-2"> {{ project.title.rendered }} </h3>
								<div
									class="text-sm opacity-0 max-w-xs group-hover:opacity-100 transition duration-500 delay-200"
									v-html="project.excerpt.rendered"
								/>
							</div>
							<div
								v-if="project._embedded['wp:term']"
								class="flex items-start left-4 bottom-4 absolute text-gray-dark"
							>
								<nuxt-link
									
									v-for="tag in project._embedded['wp:term'][1]" :key="tag.id"
									:to="`/tags/${tag.slug}`"
									class="tag !px-3 !py-2 text-sm border-gray-light bg-gray-light bg-opacity-80 hover:bg-opacity-100 hover:border-gray-dark hover:bg-gray-dark"
								> {{ tag.name }}
								</nuxt-link>
							</div>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>

		<div class="flex justify-center align-middle mt-6">
			<a
				href="#"
				class="btn text-gray border-gray-medium hover:border-gray-dark hover:bg-gray-dark hover:text-gray-light"
			>
				<span class="mr-4">Все проекты</span>
				<svg width="4" height="7" viewBox="0 0 4 7" fill="none">
					<path d="M0 0L4 3.5L0 7V0Z" fill="currentColor" />
				</svg>
			</a>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			projectTags: []
		}
	},
	async fetch() {
		await this.$store.dispatch("getProjects");
	},
	computed: {
		projects() {
			return this.$store.state.projects
		},
	},
	methods: {
	}
}
</script>

<style></style>
