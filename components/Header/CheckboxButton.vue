<template>
	<label
		:for="id"
		:class="{
			'bg-gray-dark border-gray-dark !text-gray-light': selected.includes(title),
		}"
		class="group select-none block mr-2 py-3 px-4 rounded-lg border-2 border-gray text-gray transform transition-all duration-200 hover:border-gray-dark hover:text-gray-dark hover:scale-95"
	>
		<p class="text-sm">
			{{ title }}
		</p>
		<input
			:id="id"
			v-model="selected"
			:value="title"
			:name="name"
			class="hidden w-full py-3 px-4 mb-6 rounded-lg border-2 border-gray outline-none focus:border-red"
			type="checkbox"
		>
	</label>
</template>
<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
			default: 'Услуга',
		},
		value: {
			type: String,
			required: true,
			default: 'service',
		},
		id: {
			type: String,
			required: true,
			default: 'service',
		},
		name: {
			type: String,
			required: true,
			default: 'contact-service',
		},
	},
	data() {
		return {
			selected: [],
		}
	},
	methods: {
		isChecked(value) {
			return this.selected.includes(value)
		},
		clearSelectedServices() {
			this.selected = []
		}
	},
}
</script>
