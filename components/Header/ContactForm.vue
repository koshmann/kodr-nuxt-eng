<template>
	<div class="contact-form px-3 py-6 rounded-2xl bg-gray-light">
		<form
			ref="contactForm"
			action="https://dev.kodr.agency/wp-json/contact-form-7/v1/contact-forms/5/feedback"
			method="post"
			@submit.prevent="formSubmissionHandler"
		>
			<div
				class="grid grid-cols-2 justify-between items-baseline pb-4 mb-16 border-gray-medium border-b sm:block sm:mb-8"
			>
				<h3 class="text-gray-dark text-2xl font-medium">
					Расскажите о Вашем проекте
				</h3>
			</div>
			<div class="grid grid-cols-2 gap-6 sm:block">
				<div class="flex flex-col">
					<label for="contact-name">
						<p class="text-sm text-gray mb-2">
							Ваше имя<span class="text-red">*</span>
						</p>
						<input
							id="contact-name"
							name="contact-name"
							class="block w-full py-3 px-4 mb-6 rounded-lg bg-transparent border-2 border-gray outline-none focus:border-red"
							type="text"
							required
						>
					</label>
					<div class="grid grid-cols-2 gap-6 sm:block">
						<div class="">
							<label for="contact-phone">
								<p class="text-sm text-gray mb-2">
									Ваш телефон<span class="text-red">*</span>
								</p>
							</label>
							<vue-tel-input 
								v-model="phone" 
								:input-options="inputOptions"
								:style-classes="styleClasses"
								:dropdown-options="dropdownOptions"
								mode="international"
							/>
						</div>
						
						<label for="contact-email">
							<p class="text-sm text-gray mb-2">
								Ваш email<span class="text-red">*</span>
							</p>
							<input
								id="contact-email"
								name="contact-email"
								class="block w-full py-3 px-4 mb-6 bg-transparent rounded-lg border-2 border-gray outline-none focus:!border-red"
								type="email"
								required
							>
						</label>
					</div>
					<div class="block sm:mb-4">
						<label class="text-sm text-gray mb-2">
							<p class="mb-2">Укажите тип Вашего проекта</p>
						</label>
						<fieldset class="flex flex-wrap">
							<label
								for="contact-branding"
								:class="{
									'bg-gray-dark !border-gray-dark !text-gray-light': isChecked('Брендинг'),
								}"
								class="group select-none block mr-2 py-3 px-4 rounded-lg border-2 border-gray text-gray transform transition-all duration-200 hover:border-gray-dark hover:text-gray-dark hover:scale-95 sm:mb-2"
							>
								<p class="text-sm">
									Брендинг
								</p>
								<input
									id="contact-branding"
									v-model="selected"
									value="Брендинг"
									name="contact-branding"
									class="hidden w-full py-3 px-4 mb-6 rounded-lg border-2 border-gray outline-none focus:border-red"
									type="checkbox"
								>
							</label>
							<label
								for="contact-web-dev"
								:class="{
									'bg-gray-dark !border-gray-dark !text-gray-light': isChecked('Разработка сайта'),
								}"
								class="group select-none block mr-2 py-3 px-4 rounded-lg border-2 border-gray text-gray transform transition-all duration-200 hover:border-gray-dark hover:text-gray-dark hover:scale-95 sm:mb-2"
							>
								<p class="text-sm">
									Разработка сайта
								</p>
								<input
									id="contact-web-dev"
									v-model="selected"
									value="Разработка сайта"
									name="contact-web-dev"
									class="hidden w-full py-3 px-4 mb-6 rounded-lg border-2 border-gray outline-none focus:border-red"
									type="checkbox"
								>
							</label>
							<label
								for="contact-promo"
								:class="{
									'bg-gray-dark !border-gray-dark !text-gray-light': isChecked('Продвижение'),
								}"
								class="group select-none block mr-2 py-3 px-4 rounded-lg border-2 border-gray text-gray transform transition-all duration-200 hover:border-gray-dark hover:text-gray-dark hover:scale-95 sm:mb-2"
							>
								<p class="text-sm">
									Продвижение
								</p>
								<input
									id="contact-promo"
									v-model="selected"
									value="Продвижение"
									name="contact-promo"
									class="hidden w-full py-3 px-4 mb-6 rounded-lg border-2 border-gray outline-none focus:border-red"
									type="checkbox"
								>
							</label>
						</fieldset>
					</div>
				</div>
				<div class="flex flex-col justify-between">
					<label for="contact-message flex-grow-1 h-full flex flex-col">
						<p class="text-sm text-gray mb-2">Ваше сообщение<span class="text-red">*</span></p>
					</label>
					<textarea
						id="contact-message"
						name="contact-message"
						class="block w-full h-full py-3 px-4 mb-5 bg-transparent rounded-lg border-2 border-gray outline-none focus:border-red"
						placeholder="Опишите, задачу"
						required
					/>
					<div class="grid grid-cols-2 gap-6 sm:block">
						<label for="contact-accept-policy" class="flex items-center sm:mb-6">
							<input
								id="contact-accept-policy"
								v-model="acceptPolicy"
								type="checkbox"
								name="accept-policy"
								class="mr-4 hidden"
								checked
								required
							>
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="privacy-checkbox mr-4">
								<path class="hidden" d="M11 4L6 10L3 7" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" />
								<rect x="1" y="1" width="12" height="12" rx="2" stroke="#828282" />
							</svg>

							<p class="text-sm text-gray leading-4">
								Соглашаюсь на обработку <nuxt-link class="text-gray-dark underline hover:text-red transition-colors duration-200 ease" to="/privacy-policy">персональных данных</nuxt-link>
							</p>
						</label>
						<button
							type="submit"
							class="btn place-self-end !outline-none select-none border-red hover:bg-red hover:text-gray-light disabled:opacity-75 disabled:cursor-not-allowed"
							:disabled="cfSubmitting || !acceptPolicy"
						>
							<span>Отправить</span>
						</button>
					</div>
				</div>
			</div>
		</form>
		
		<transition name="bounce">
			<div v-if="cfSubmitting" class="mt-6 bg-gray-dark rounded-2xl"> 
				<loading />
			</div>
		</transition>
	</div>
</template>
<script>
import Loading from '../Loading.vue';
export default {
	components: { Loading },
	data() {
		return {
			selected: [],
			phone:"",
			styleClasses: "mb-6 !shadow-none !rounded-lg !border-2 !border-gray",
			inputOptions: {
				id:"contact-phone",
				name:"contact-phone",
				placeholder: "",
				styleClasses: "block w-full py-3 px-4 bg-transparent rounded-lg border-2 border-gray outline-none focus:!border-red"
			},
			dropdownOptions: {
				showDialCodeInSelection: true,
				tabindex: 5,
				showFlags: true
			},
			cfResponseMessage: "",
			cfSubmitting: false,
			acceptPolicy: true
		}
	},
	methods: {
		formSubmissionHandler(event) {
			this.cfSubmitting = true;
			const formElement = event.target,
				{ action, method } = formElement,
				body = new FormData(formElement);

			fetch(action, {
				method,
				body,
			})
				.then((response) => response.json())
				.then((response) => {
					// Determine if the submission is not valid
					if ( response.status !== 'mail_sent' ) {
						console.log('form submission failed ' + response.status)
						this.cfSubmitting = false;
					}
					this.cfResponseMessage = response.message;
					console.log(this.cfResponseMessage)
					this.clearSelectedServices();
					formElement.reset();
					if ( response.status === 'mail_sent' ) {
						console.log('form submission success ' + response.status)
						this.cfSubmitting = false;
						this.$router.push('/thank-you')
					}

				})
				.catch((error) => {
					console.log('problem with request ' + error)
					this.cfSubmitting = false;
				})
		},
		clearSelectedServices() {
			this.selected = []
		},
		isChecked(value) {
			return this.selected.includes(value)
		},

	},
}
</script>

<style>
	.vue-tel-input:focus-within {
		box-shadow: none;
		border-color: #FF3300 !important;
		outline: none !important;
	}
	.vti__dropdown {
		border-radius: 8px;
	}
	.vti__dropdown-list {
		width: 320px;
		border-radius: 8px;
		box-shadow: 0 4px 16px rgb(0 0 0 / 20%);
		outline: none !important;
	}
	.vti__dropdown-list .vti__dropdown-item strong {
		font-weight: normal;
	}
	#contact-accept-policy:checked + .privacy-checkbox > .hidden {
		display: block !important;
	}
</style>