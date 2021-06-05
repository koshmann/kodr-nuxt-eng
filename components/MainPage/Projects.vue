<template>
	<section class="px-3 py-6 bg-gray-light rounded-2xl my-2">
		<div
			class="flex justify-between items-center pb-3 mb-6 border-gray-medium border-b"
		>
			<h2 class="text-3xl w-64 font-title font-medium text-gray max-w-xs leading-7 sm:text-xl sm:leading-6 sm:w-48">
				<span class="text-gray-dark">Projects,</span>
				<span>we are proud of</span>
			</h2>
			<nuxt-link
				to="/projects"
				class="btn text-gray border-gray-medium hover:border-gray-dark hover:bg-gray-dark hover:text-gray-light sm:!hidden"
			>
				<span class="mr-4">More projects</span>
				<svg width="4" height="7" viewBox="0 0 4 7" fill="none">
					<path d="M0 0L4 3.5L0 7V0Z" fill="currentColor" />
				</svg>
			</nuxt-link>
		</div>

		<div class="grid grid-cols-2 gap-6 sm:grid-cols-1">
			<div v-for="project in projects" :key="project.id" class="card single-project">
				<div class="group">
					<div
						class="rounded-lg overflow-hidden project-cover relative pt-[60%] sm:pt-[100%]"
					>
						<nuxt-link :to="`/projects/${project.slug}`">
							<img
								v-if="project._embedded['wp:featuredmedia']"
								:src="project._embedded['wp:featuredmedia'][0].source_url"
								class="absolute top-0 left-0 h-full object-cover w-full transition duration-500 ease-in-out group-hover:transform group-hover:scale-110"
								alt=""
							>
							<div class="absolute top-4 left-4">
								<h3 
									class="font-title font-medium text-xl mb-2"
									:class="{'text-gray-light': isLightText(project.acf.textcolor)}"
								> {{ project.title.rendered }} </h3>
								<div
									class="text-sm text-gray opacity-0 max-w-xs group-hover:opacity-100 transition duration-500 delay-100 sm:opacity-100 sm:mr-24"
									:class="{'text-gray-medium': isLightText(project.acf.textcolor)}"
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
									class="tag !px-3 !py-2 text-xs !border-0 bg-gray-light bg-opacity-80 hover:bg-opacity-100 hover:!text-gray-dark hover:border-white hover:bg-white"
								> {{ tag.name }}
								</nuxt-link>
							</div>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>

		<div class="flex justify-center align-middle mt-6">
			<nuxt-link
				to="/projects"
				class="btn text-gray border-gray-medium hover:border-gray-dark hover:bg-gray-dark hover:text-gray-light"
			>
				<span class="mr-4">More projects</span>
				<svg width="4" height="7" viewBox="0 0 4 7" fill="none">
					<path d="M0 0L4 3.5L0 7V0Z" fill="currentColor" />
				</svg>
			</nuxt-link>
		</div>
	</section>
</template>

<script>
export default {
	async fetch() {
		await this.$store.dispatch("getProjects");
	},
	computed: {
		projects() {
			return this.$store.state.projects
		},
	},
	methods: {
		isLightText(textColor) {
			return textColor === "Светлый"
		}
	}
}
</script>

<style></style>
