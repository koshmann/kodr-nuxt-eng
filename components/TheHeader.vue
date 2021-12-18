<template>
	<header
		id="header"
		class="w-full sticky top-0 z-20"
		:class="{ 'stuck': stuck }"
	>
		<div id="masthead" class="overflow-hidden relative">
			<div
				class="relative overflow-hidden bg-gray-light grid grid-cols-3 justify-between items-center p-3 m-3 mb-2 rounded-2xl z-20 transition-colors duration-300 sm:grid-cols-2"
				:class="{ '!bg-white !rounded-b-2xl !border-b-0 !bg-opacity-80 backdrop-filter backdrop-blur-lg': stuck }"
			>
				<div 
					class="divider border-gray-medium border-b absolute bottom-0 left-3 right-3"
					:class="{ '!border-b-0': stuck }" 
				/>
				<div
					class="absolute w-full h-full top-0 left-0 bg-white rounded-lg opacity-0 transform -translate-x-full transition duration-200 ease-in-out"
					:class="{ 'opacity-100 !translate-x-0': menuActive && !stuck }"
				/>
				<div class="flex flex-row items-center z-10 sm:hidden">
					<div class="menu-btn mr-4 select-none">
						<a
							class="btn border-gray-medium hover:bg-gray-dark hover:border-gray-dark hover:text-gray-light"
							@click="menuActive = !menuActive"
						>
							<svg
								class="mr-2 burger"
								width="17"
								height="17"
								viewBox="0 0 24 15"
								fill="none"
							>
								<path d="M24 0.5H0" stroke="currentColor" :class="{ 'opacity-0 ': menuActive }" />
								<path d="M24 7.5H0" stroke="currentColor" class="transform origin-center transition-transform duration-200 ease" :class="{ 'rotate-45 ': menuActive }" />
								<path d="M24 7.5H0" stroke="currentColor" class="transform origin-center transition-transform duration-200 ease" :class="{ '-rotate-45 ': menuActive }" />
								<path d="M24 14.5H0" stroke="currentColor" :class="{ 'opacity-0 ': menuActive }" />
							</svg>
							<span class="">Menu</span>
						</a>
					</div>
					<nav class="flex flex-row select-none">
						<nuxt-link
							to="/projects"
							class="menu-link mr-4 delay-100"
							:class="{
								'transform translate-y-4 rotate-6 origin-left opacity-0 transition-all duration-200 delay-75': !menuActive,
							}"
						>
							Projects
						</nuxt-link>
						<nuxt-link
							to="/contacts"
							class="menu-link mr-4 delay-150"
							:class="{
								'transform translate-y-4 rotate-6 origin-left opacity-0 transition-all duration-200 delay-75': !menuActive,
							}"
						>
							Contacts
						</nuxt-link>
					</nav>
				</div>

				<div class="text-center z-10 sm:!text-left">
					<header-logo />
				</div>

				<div class="header-button text-right z-10 select-none sm:hidden">
					<a href="https://kodr-agency.ru/" class="mr-4 hover:underline">
						<span>RU</span>
					</a>
					<nuxt-link 
						to="/contacts"
						class="btn border-red hover:bg-red hover:text-gray-light"
					>
						<span>Get in touch</span>
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
				<div class="hidden text-right sm:block">
					<button 
						class="mobile-burger btn z-10 !py-4 !px-4 !outline-none border-gray-medium transition duration-200 ease-in-out hover:border-gray-dark hover:bg-gray-dark hover:text-gray-light"
						@click="showBurgerMenu"
					>
						<svg
							class="mobile-burger "
							width="17"
							height="17"
							viewBox="0 0 24 15"
							fill="none"
						>
							<path d="M24 0.5H0" stroke="currentColor" :class="{ 'opacity-0 ': mobileMenu }" />
							<path d="M24 7.5H0" stroke="currentColor" class="transform origin-center transition-transform duration-200 ease" :class="{ 'rotate-45 ': mobileMenu }" />
							<path d="M24 7.5H0" stroke="currentColor" class="transform origin-center transition-transform duration-200 ease" :class="{ '-rotate-45 ': mobileMenu }" />
							<path d="M24 14.5H0" stroke="currentColor" :class="{ 'opacity-0 ': mobileMenu }" />
						</svg>
						
					</button>
				</div>
			</div>
		</div>
		<transition name="mobile-menu">
			<div v-show="mobileMenu" class="cc-mobile-menu absolute z-20 mx-3 p-3 pt-6 bg-gray-light text-gray-dark rounded-2xl">
				<p class="font-title font-medium from-gray-dark text-xl mb-4">Menu</p>
				<nav class="text-gray">
					<ul>
						<li class="my-2">
							<nuxt-link to="/projects">
								Projects
							</nuxt-link>
						</li>
						<li class="my-2">
							<nuxt-link to="/contacts">
								Contacts
							</nuxt-link>
						</li>
					</ul>
				</nav>
				<nuxt-link to="/contacts">
					<button class="btn !block mt-8 w-full bg-red border-red text-white !outline-none">
						Get in touch
					</button>
				</nuxt-link>
			</div>
		</transition>
	</header>
</template>

<script>
export default {
	data() {
		return {
			menuActive: false,
			stuck: false,
		}
	},
	computed: {
		overlay() {
			return this.$store.state.overlay;
		},
		mobileMenu() {
			return this.$store.state.mobileMenu;
		}
	},
	watch: {
		'$route' () {
			this.toggleOverlay(false);
			this.toggleBurgerMenu(false);
		}
	},
	mounted() {
		window.addEventListener('scroll', this.stickHeader)
	},
	methods: {
		stickHeader() {
			if (window.pageYOffset > 0) {
				this.stuck = true;
				//this.formOpen = false
			} else {
				this.stuck = false
			}
		},
		toggleOverlay(bool) {
			this.$store.dispatch('setOverlay', bool)
		},
		toggleBurgerMenu(bool) {
			this.$store.dispatch('setMobileMenu', bool)	
		},
		showBurgerMenu() {
			if (!this.mobileMenu) {
				this.toggleOverlay(true);
				this.toggleBurgerMenu(true);
			}
			else if (this.mobileMenu) {
				this.toggleOverlay(false);
				this.toggleBurgerMenu(false);
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.stuck {
	position: sticky;
	//animation: stickheader 0.77s ease;
}

@keyframes stickheader {
	from {
		transform-origin: left bottom;
		transform: translateY(-100%) rotate(-6deg);
	}
	to {
		transform: translateY(0) rotate(0);
	}
}

.menu-link {
	@apply relative;
	@apply transition;
	@apply duration-200;
	&::before {
		content: '';
		bottom: -1px;
		left: 0;
		position: absolute;
		height: 1px;
		width: 100%;
		background: currentColor;
		opacity: 0;
		transition: inherit;
	}
	&:hover {
		&::before {
			opacity: 1;
		}
	}
}

.cc-mobile-menu {
	width: calc(100% - 1.5rem);
	z-index: 5;
}


.mobile-menu-enter-active {
	animation: mobile-menu-in 0.5s ease;
	transform-origin: top center;
}
.mobile-menu-leave-active {
	animation: mobile-menu-out 0.25s ease;
	transform-origin: top center;
}
@keyframes mobile-menu-in {
	0% {
		transform: translateY(-25%) scale(0.9);
		opacity: 0;
	}
	100% {
		transform: translateY(0) scale(1);
		opacity: 1;
	}
}
@keyframes mobile-menu-out {
	0% {
		transform: translateY(0) scale(1);
		opacity: 1;
	}
	100% {
		opacity: 0;
		transform: translateY(25%) scale(1);
	}
}

</style>
