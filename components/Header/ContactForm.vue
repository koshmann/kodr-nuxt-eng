<template>
	<div class="contact-form px-3 py-6 rounded-2xl bg-gray-light">
		<div
			class="grid grid-cols-2 justify-between items-baseline pb-4 mb-16 border-gray-medium border-b"
		>
			<h3 class="text-gray-dark text-2xl font-medium">Расскажите о Вашем проекте</h3>
		</div>
		<div class="grid grid-cols-2 gap-6">
			<div class="flex flex-col">
				<label for="contact-name">
					<p class="text-sm text-gray mb-2">
						Ваше имя<span class="text-red">*</span>
					</p>
					<input
						id="contact-name"
						class="block w-full py-3 px-4 mb-6 rounded-lg bg-transparent border-2 border-gray outline-none focus:border-red"
						type="text"
					>
				</label>
				<div class="grid grid-cols-2 gap-6">
					<label for="contact-phone">
						<p class="text-sm text-gray mb-2">
							Ваш телефон<span class="text-red">*</span>
						</p>
						<input
							id="contact-phone"
							class="block w-full py-3 px-4 mb-6 bg-transparent rounded-lg border-2 border-gray outline-none focus:border-red"
							type="tel"
						>
					</label>
					<label for="contact-email">
						<p class="text-sm text-gray mb-2">
							Ваш email<span class="text-red">*</span>
						</p>
						<input
							id="contact-email"
							class="block w-full py-3 px-4 mb-6 bg-transparent rounded-lg border-2 border-gray outline-none focus:border-red"
							type="email"
						>
					</label>
				</div>
				<div class="flex items-start">
					<div v-for="(service, idx) in services" :key="idx">
						<header-checkbox-button
							:id="service.id"
							:title="service.title"
							:value="service.value"
						/>
					</div>
				</div>
			</div>
			<div class="flex flex-col justify-between">
				<label for="contact-message flex-grow-1 h-full flex flex-col">
					<p class="text-sm text-gray mb-2">Ваше сообщение</p>
				</label>
				<textarea
					id="contact-message"
					class="block w-full h-full py-3 px-4 mb-5 bg-transparent rounded-lg border-2 border-gray outline-none focus:border-red"
					placeholder="Оставьте сообщение (необзязательно)"
				/>
				<div class="grid grid-cols-2 gap-6">
					<label for="contact-accept-policy" class="flex items-center">
						<input
							id="contact-accept-policy"
							type="checkbox"
							name="accept-policy"
							class="mr-4"
						>
						<p class="text-sm text-gray">
							Нажимая кнопку, Вы даёте согласие на обработку персональных данных
						</p>
					</label>
					<a
						class="btn place-self-end select-none border-red hover:bg-red hover:text-gray-light"
					>
						<span>Отправить</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			services: [
				{
					title: 'Брендинг',
					value: 'branding',
					id: 'contact-branding',
				},
				{
					title: 'Разработка сайта',
					value: 'web-dev',
					id: 'contact-web-dev',
				},
				{
					title: 'Продвижение',
					value: 'promo',
					id: 'contact-promo',
				},
			],
		}
	},
}
</script>
