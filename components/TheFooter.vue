<template>
	<footer class="px-3 bg-gray-dark text-gray-light rounded m-3 mt-3">
		<div class="flex justify-between items-center py-3 mb-12 border-gray-darker border-b">
			<h2 class="text-3xl font-title">
				<svg
					class="footer-logo"
					width="50"
					height="26"
					viewBox="0 0 50 26"
					fill="none"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M36.1272 0H13.8728C6.46858 0 0 5.32349 0 13C0 20.6765 6.46858 26 13.8728 26H36.1272C43.5314 26 50 20.6765 50 13C50 5.32348 43.5314 0 36.1272 0ZM13 21C8.58172 21 5 17.4182 5 13C5 8.58171 8.58174 5 13 5H37C41.4183 5 45 8.58172 45 13C45 17.4183 41.4183 21 37 21H13Z"
						fill="#F2F2F2"
					/>
					<circle
						class="logo-dot"
						opacity="0.2"
						cx="37"
						cy="13"
						r="12"
						fill="#FF3300"
					/>
					<circle
						class="logo-dot"
						opacity="0.4"
						cx="37"
						cy="13"
						r="10"
						fill="#FF3300"
					/>
					<circle
						class="logo-dot"
						opacity="0.6"
						cx="37"
						cy="13"
						r="8"
						fill="#FF3300"
					/>
					<circle
						class="logo-dot"
						opacity="0.8"
						cx="37"
						cy="13"
						r="6"
						fill="#FF3300"
					/>
					<circle
						class="logo-dot"
						cx="37"
						cy="13"
						r="4"
						fill="#FF3300"
					/>
				</svg>
			</h2>
			<nuxt-link
				to="/contacts"
				class="btn text-gray-light border-gray-darker hover:border-gray-light hover:bg-gray-light hover:text-gray-dark"
			>
				<span class="mr-4">Контакты</span>
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

		<div class="grid grid-cols-2">
			<div class="grid grid-cols-2">
				<div>
					<h3 class="text-lg mb-4">
						Будем рады с Вами работать!
					</h3>
					<p class="text-gray mb-8">
						Мы постараемся, чтоб Ваш проект стал лучшим в нашем портфолио.
					</p>
					<a class="btn border-red text-gray-light hover:text-white hover:bg-red ">
						<span>Заказать проект</span>
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
					</a>
				</div>
				<div />
			</div>
			<div class="text-gray">
				<h3 class="text-lg mb-4 text-gray-light">
					Для связи
				</h3>

				<div class="grid grid-cols-4 gap-6 text-gray">
					<a
						href="#"
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
						href="#"
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
						href="#"
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
						href="#"
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

		<div class="grid grid-cols-2 py-3 text-gray text-sm">
			<div>
				<p>© KODR, 2020</p>
			</div>

			<div class="text-right">
				<a
					href="#"
					class="underline hover:text-gray-light transition-colors duration-200"
				>Политика
					конфиденциальности</a>
			</div>
		</div>
	</footer>
</template>


