<template>
	<div id="main" class="bg-gray-dark mx-3">
		<section class="px-3 py-36 bg-gray-light rounded-2xl sm:py-6">
			<div
				class="grid grid-cols-2 justify-between items-baseline pb-4 mb-16 border-gray-medium border-b sm:mb-8"
			>
				<h2 class="text-gray-dark text-4xl font-medium sm:text-2xl">Контакты</h2>
				<div class="text-gray text-right sm:hidden">
					<p>Будем рады познакомиться!</p>
				</div>
			</div>
			<div class="grid grid-cols-2 sm:block">
				<div class="grid grid-cols-2 sm:mb-8 sm:gap-4">
					<div>
						<p class="text-sm text-gray mb-2">Телефон</p>
						<a
							href="#"
							class="kodr-underline hover:text-red transition-colors duration-200"
						>
							<span>+7 (123) 456 78 90</span>
						</a>
					</div>
					<div>
						<p class="text-sm text-gray mb-2">Email</p>
						<a
							href="#"
							class="kodr-underline hover:text-red transition-colors duration-200"
						>
							<span>info@kodr.agency</span>
						</a>
					</div>
				</div>
				<div class="">
					<p class="text-sm text-gray mb-2">Медиа</p>
					<div class="grid grid-cols-4 sm:grid-cols-2 sm:gap-4">
						<div>
							<a
								href="#"
								class="kodr-underline hover:text-red transition-colors duration-200"
							>
								<span>Instagram</span>
							</a>
						</div>
						<div>
							<a
								href="#"
								class="kodr-underline hover:text-red transition-colors duration-200"
							>
								<span>Behance</span>
							</a>
						</div>
						<div>
							<a
								href="#"
								class="kodr-underline hover:text-red transition-colors duration-200"
							>
								<span>Telegram</span>
							</a>
						</div>
						<div>
							<a
								href="#"
								class="kodr-underline hover:text-red transition-colors duration-200"
							>
								<span>What'sApp</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<header-contact-form class="my-2" />
	</div>
</template>

<script>
//import { myPage } from '~/utils/transitions.js'
export default {
	transition: 'bounce',
	head() {
		return {
			title: "Контакты - KODR Agency",
		}
	},
}
</script>

