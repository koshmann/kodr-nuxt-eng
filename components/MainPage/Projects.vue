<template>
	<section class="px-3">
		<div class="flex justify-between items-center py-3 mb-12 border-gray-medium border-b">
			<h2 class="text-3xl font-title">
				Проекты
			</h2>
			<a
				href="#"
				class="btn text-gray border-gray-medium hover:border-gray-dark hover:bg-gray-dark hover:text-gray-light"
			>
				<span class="mr-4">Все проекты</span>
				<svg
					width="4"
					height="7"
					viewBox="0 0 4 7"
					fill="none"
				>
					<path
						d="M0 0L4 3.5L0 7V0Z"
						fill="currentColor"
					/>
				</svg>
			</a>
		</div>

		<div class="grid grid-cols-2 gap-6">
			<div class="card single-project">
				<div class="group">
					<div class="rounded overflow-hidden project-cover">
						<a href="#">
							<img
								src="~/assets/cover-zaharin.jpg"
								class="w-full"
								alt=""
							>
						</a>
					</div>
					<div class="flex justify-between items-center pt-4 pb-3">
						<h3 class="text-lg font-title relative">
							Название проекта
						</h3>
						<div class="text-gray-medium">
							<svg
								class="hover:text-red"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<rect
									class="group-hover:stroke-[red] group-hover:fill-[red] group-hover:text-red transition-color duration-200"
									x="0.5"
									y="0.5"
									width="23"
									height="23"
									rx="11.5"
									stroke="#E0E0E0"
									fill="transparent"
								/>
								<path
									class="text-gray-dark group-hover:text-white transition-color duration-200"
									d="M12 8V16M8 12H16"
									stroke="currentColor"
									stroke-linecap="round"
								/>
							</svg>
						</div>
					</div>
				</div>

				<div class="flex items-start pb-8 mb-8 border-b border-gray-medium">
					<a
						href="#"
						class="tag border-gray-medium hover:border-gray-dark hover:bg-gray-dark"
					>Промо</a>
					<a
						href="#"
						class="tag border-gray-medium hover:border-gray-dark hover:bg-gray-dark"
					>Корпоративный</a>
				</div>
			</div>
		</div>

		<div class="flex justify-center align-middle mt-6">
			<a
				href="#"
				class="btn text-gray border-gray-medium hover:border-gray-dark hover:bg-gray-dark hover:text-gray-light"
			>
				<span class="mr-4">Все проекты</span>
				<svg
					width="4"
					height="7"
					viewBox="0 0 4 7"
					fill="none"
				>
					<path
						d="M0 0L4 3.5L0 7V0Z"
						fill="currentColor"
					/>
				</svg>
			</a>
		</div>
	</section>
</template>

<script>
export default {

}

</script>

<style>

</style>
