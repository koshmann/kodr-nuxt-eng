<template>
	<header
		id="header"
		class="w-full sticky top-0 z-10"
		:class="{ stuck: stuck }"
	>
		<div id="masthead" class="overflow-hidden relative">
			<div
				class="relative overflow-hidden bg-gray-light grid grid-cols-3 justify-between items-center p-3 m-3 mb-2 rounded-2xl z-10 transition-colors duration-300"
				:class="{ '!bg-white !rounded-b-2xl !border-b-0': stuck }"
			>
				<div 
					class="divider border-gray-medium border-b absolute bottom-0 left-3 right-3"
					:class="{ '!border-b-0': stuck }" 
				/>
				<div
					class="absolute w-full h-full top-0 left-0 bg-white rounded-lg opacity-0 transform -translate-x-full transition duration-200 ease-in-out"
					:class="{ 'opacity-100 !translate-x-0': menuActive && !stuck }"
				/>
				<div class="hidden lg:flex flex-row items-center z-10">
					<div class="menu-btn mr-4 select-none">
						<a
							class="btn border-gray-medium hover:bg-gray-dark hover:border-gray-dark hover:text-gray-light"
							@click="menuActive = !menuActive"
						>
							<svg
								class="mr-2 burger"
								:class="{ 'to-cross': menuActive }"
								width="17"
								height="17"
								viewBox="0 0 24 15"
								fill="none"
							>
								<path d="M24 0.5H0" stroke="currentColor" />
								<path d="M24 7.5H0" stroke="currentColor" />
								<path d="M24 7.5H0" stroke="currentColor" />
								<path d="M24 14.5H0" stroke="currentColor" />
							</svg>
							<span class="">Меню</span>
						</a>
					</div>
					<div class="lg:hidden">
						<a class="mobile-burger">
							<svg width="17" height="17" viewBox="0 0 24 15" fill="none">
								<path d="M24 0.5H0" stroke="#333333" />
								<path d="M24 7.5H0" stroke="#333333" />
								<path d="M24 7.5H0" stroke="#333333" />
								<path d="M24 14.5H0" stroke="#333333" />
							</svg>
						</a>
					</div>
					<nav class="flex flex-row select-none">
						<nuxt-link
							to="/contacts"
							class="menu-link mr-4 delay-100"
							:class="{
								'transform translate-y-4 rotate-6 origin-left opacity-0 transition-all duration-200 delay-75': !menuActive,
							}"
						>
							Проекты
						</nuxt-link>
						<nuxt-link
							to="/contacts"
							class="menu-link mr-4 delay-150"
							:class="{
								'transform translate-y-4 rotate-6 origin-left opacity-0 transition-all duration-200 delay-75': !menuActive,
							}"
						>
							Контакты
						</nuxt-link>
						<nuxt-link
							to="/contacts"
							class="menu-link mr-4 delay-150"
							:class="{
								'transform translate-y-4 rotate-6 origin-left opacity-0 transition-all duration-200 delay-75': !menuActive,
							}"
						>
							Контакты
						</nuxt-link>
					</nav>
				</div>

				<div class="text-center z-10">
					<header-logo />
				</div>

				<div class="header-button text-right z-10 select-none">
					<a 
						class="btn border-red hover:bg-red hover:text-gray-light"
						@click="formOpen = !formOpen"
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
					</a>
				</div>
			</div>
		</div>
		<div class="hidden cc-mobile-menu z-10">
			<div class="menu-glavnoe-menyu-container">
				<ul id="menu-glavnoe-menyu-1" class="menu">
					<li
						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-219"
					>
						<a href="https://kodr.agency/portfolio/">Проекты</a>
					</li>
					<li
						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-217"
					>
						<a href="https://kodr.agency/competence/">Направления</a>
					</li>
					<li
						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-216"
					>
						<a href="https://kodr.agency/contacts/">Контакты</a>
					</li>
				</ul>
			</div>
		</div>
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
	},
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

svg.burger {
	path {
		transform-origin: 50% 50%;
		transition: transform 0.25s;
	}
	&.to-cross {
		path:nth-child(1) {
			opacity: 0;
			transform: translateY(7px);
		}
		path:nth-child(2) {
			transform: rotate(-45deg);
		}

		path:nth-child(3) {
			transform: rotate(45deg);
		}
		path:nth-child(4) {
			opacity: 0;
			transform: translateY(-7px);
		}
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
</style>
