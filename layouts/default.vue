<template>
	<body class="text-gray-dark font-body bg-gray-dark">
		<div class="wrap">
			<the-header />
			<Nuxt />
			<transition name="page">
				<footer-contact-footer v-if="$nuxt.$route.name === 'contacts'" />
				<the-footer v-else />
			</transition>
			<overlay v-show="isOverlay" />
		</div>
	</body>
</template>
<script>
export default {
	data() {
		return {}
	},
	computed: {
		isOverlay() {
			return this.$store.state.overlay
		},
	},
}
</script>
