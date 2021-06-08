<template>
	<footer class="px-3 bg-gray-dark text-gray-light rounded-lg m-3 mb-0">
		<div class="flex justify-between items-center py-6 mb-12 border-gray-darker border-b">
			<footer-logo />
			<nuxt-link
				to="/contacts"
				class="btn text-gray-light border-gray-darker hover:border-gray-light hover:bg-gray-light hover:text-gray-dark"
			>
				<span class="mr-4">Contact us</span>
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
			</nuxt-link>
		</div>

		<div class="grid grid-cols-2 sm:grid-cols-1">
			<div class="grid grid-cols-2 sm:grid-cols-1">
				<div>
					<h3 class="text-lg mb-4">
						We are always excited to hear from you
					</h3>
					<p class="text-gray mb-8">
						Let's makes something special together.
					</p>
					<nuxt-link to="/contacts" class="btn border-red text-gray-light hover:text-white hover:bg-red ">
						<span>Get a quote</span>
						<svg
							class="hidden"
							width="19"
							height="19"
							fill="none"
							viewBox="0 0 19 19"
						>
							<path
								stroke="#333"
								d="M17.97 1.015L1 17.985M17.97 17.985L1 1.015"
							/>
						</svg>
					</nuxt-link>
				</div>
				<div />
			</div>
			<div class="text-gray sm:mt-12">
				<h3 class="text-lg mb-4 text-gray-light">
					Some links
				</h3>

				<div class="grid grid-cols-4 gap-6 text-gray sm:grid-cols-2 sm:gap-4">
					<a
						href="https://www.instagram.com/kodr.agency/"
						class="flex items-center hover:text-gray-light transition-colors duration-200"
					>
						<span class="mr-3">Instagram</span>
						<svg
							width="4"
							height="7"
							viewBox="0 0 4 7"
							fill="none"
						>
							<path
								d="M0 0L4 3.5L0 7L0 0Z"
								fill="currentColor"
							/>
						</svg>
					</a>
					<a
						href="https://www.behance.net/KODR"
						class="flex items-center hover:text-gray-light transition-colors duration-200"
					>
						<span class="mr-3">Behance</span>
						<svg
							width="4"
							height="7"
							viewBox="0 0 4 7"
							fill="none"
						>
							<path
								d="M0 0L4 3.5L0 7L0 0Z"
								fill="currentColor"
							/>
						</svg>
					</a>
					<a
						href="https://t.me/koshmann"
						class="flex items-center hover:text-gray-light transition-colors duration-200"
					>
						<span class="mr-3">Telegram</span>
						<svg
							width="4"
							height="7"
							viewBox="0 0 4 7"
							fill="none"
						>
							<path
								d="M0 0L4 3.5L0 7L0 0Z"
								fill="currentColor"
							/>
						</svg>
					</a>
					<a
						href="https://wa.me/380505686527"
						class="flex items-center hover:text-gray-light transition-colors duration-200"
					>
						<span class="mr-3">What'sApp</span>
						<svg
							width="4"
							height="7"
							viewBox="0 0 4 7"
							fill="none"
						>
							<path
								d="M0 0L4 3.5L0 7L0 0Z"
								fill="currentColor"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>

		<div class="mt-12 border-b border-gray-darker" />

		<div class="grid grid-cols-2 py-6 text-gray text-sm sm:grid-cols-1">
			<div>
				<p>© KODR, 2021</p>
			</div>

			<div class="text-right sm:text-left sm:mt-2">
				<nuxt-link
					to="/privacy-policy"
					class="underline hover:text-gray-light transition-colors duration-200"
				> Privacy policy</nuxt-link>
			</div>
		</div>
	</footer>
</template>


