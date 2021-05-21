<template>
	<transition name="page">
		<div
			class=" bg-gray-dark bg-opacity-80 h-full w-full fixed top-0 left-0 right-0 bottom-0 z-10"
			@click="hideOverlay(false), hideBurgerMenu(false)"
		/> 
	</transition>
</template>

<script>
export default {
	methods: {
		hideOverlay(bool) {
			this.$store.commit('toggleOverlay', bool)	
		},
		hideBurgerMenu(bool) {
			this.$store.commit('toggleMobileMenu', bool)	
		}
	}
}
</script>