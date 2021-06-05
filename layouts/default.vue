<template>
	<body class="text-gray-dark font-body bg-gray-dark">
		<div class="wrap">
			<the-header />
			<Nuxt class="relative z-10" />
			<transition name="page">
				<footer-contact-footer v-if="$nuxt.$route.name === 'contacts'" />
				<the-footer v-else />
			</transition>
			<transition name="bounce">
				<lazy-cookie-consent v-if="shouldShowCookie" @consentClosed="saveCookieConsent" />
			</transition>
			<overlay v-show="isOverlay" />
		</div>
	</body>
</template>
<script>
export default {
	data() {
		return {
			wasClosed: false,
			shouldShowCookie: false
		}
	},
	computed: {
		isOverlay() {
			return this.$store.state.overlay
		},
	},
	mounted() {
		this.shouldShowPromt()
	},
	methods: {
		saveCookieConsent(isPromtOpen) {
			this.shouldShowCookie = !isPromtOpen;
			localStorage.setItem("kodrCookieConsent", true);
		},
		shouldShowPromt() {
			this.shouldShowCookie = !localStorage.getItem("kodrCookieConsent");
		},
	}
}
</script>
