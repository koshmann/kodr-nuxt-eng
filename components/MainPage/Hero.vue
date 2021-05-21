<template>
	<section id="hero" class="relative overflow-hidden transition-all duration-500 ease" :class="{'showreel-shown': showreelShown}">

		<div class="showreel-part absolute flex items-center justify-end top-0 left-0 w-full h-full rounded-2xl overflow-hidden">
			<div class="bg-red absolute h-full w-full z-0">
				<button class="btn absolute opacity-0 !outline-none !p-4 text-gray-light right-0 top-4 transition-all duration-500 ease hover:bg-gray-light hover:text-gray-dark hover:border-gray-light"
					:class="{'opacity-100 !right-4 delay-0':showreelShown}"
					@click="showreelShown = false"
				>
					<svg width="19" height="19" viewBox="0 0 19 19" fill="none">
						<path d="M17.9852 17.9852L1.01465 1.01465" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M17.9852 1.01479L1.01465 17.9854" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
			</div>
			<div 
				class="watch-showreel select-none flex items-center text-gray-light z-10 cursor-pointer transition-all duration-500 ease"
				@click="showreelShown = true"
			>
				<svg width="36" height="36" viewBox="0 0 36 36" fill="none" class="mr-3 flex-shrink-0">
					<path d="M17 14L21 18L17 22V14Z" fill="currentColor" />
					<rect x="0.5" y="0.5" width="35" height="35" rx="17.5"
						stroke="currentColor"
					/>
				</svg>
				<span class="leading-5">Showreel 2021</span>
			</div>
		</div>

		<div class="title-part relative px-3 py-48 rounded-2xl bg-gray-light transition-all duration-500 ease sm:py-12"
			:class="{'title-part-to-left':showreelShown}"
		>
			<div class="title block max-w-xl transition-all duration-200 ease"
				:class="{'title-to-opacity':showreelShown}"
			>
				<div class="flex-1">
					<h1 class="text-5xl font-title font-medium sm:text-3xl sm:leading-7">
						Создаём сайты, <span class="text-gray">которые раскрывают потенциал Вашего бизнеса.</span>
					</h1>
					<p class="pt-4 pb-8 text-gray">
						Дизайн. Интерфейсы. 3D графика. Диджитал.
					</p>
					<nuxt-link to="/contacts" class="btn border-red hover:text-white hover:bg-red">
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
					</nuxt-link>
				</div>
			</div>
		</div>
		
	</section>
</template>

<script>
export default {
	data() {
		return {
			showreelShown: false,
		}
	},
}
</script>

<style lang="scss" scoped>
	#hero {
		.title-part {
			margin-right: 25%;
		}
		.showreel-part {
			.watch-showreel {
				width: 25%;
				justify-content: center;
			}
			&:hover {
				&~.title-part {
					margin-right:50%;
				}
				.watch-showreel {
					margin-right: 12.5%;
				}
			}
		}
		&.showreel-shown {
			.title-part {

			}
			.showreel-part {
				.watch-showreel {
					margin-right: 40% !important;
					opacity: 0;
					visibility: hidden;
				}
			}
		}
	}

	.title-part-to-left {
		transform: translateX(-100%);
	}
	.title-to-opacity {
		opacity: 0;
		transform: translateX(-20%);
	}

	@media (max-width: 767px) {
		#hero {
			.title-part {
				margin-right: 0;
				margin-bottom: 25%;
			}
			.showreel-part {
				justify-content: center;
				.watch-showreel {
					height: 20%;
					justify-content: center;
					justify-self: center;
					align-self: flex-end;
				}
				&:hover {
					&~.title-part {
						margin-right:0 !important;
						margin-bottom:50% !important;
					}
					.watch-showreel {
						margin-right: 0 !important;
						margin-bottom: 12.5% !important;
					}
				}
			}
			&.showreel-shown {
					max-height: 250px;
				.title-part {
					max-height: 250px;
				}
				.showreel-part {
					max-height: 250px;
					.watch-showreel {
						margin-right: 0 !important;
						margin-bottom: 20% !important;
						opacity: 0;
						visibility: hidden;
					}
				}
			}
		}

		.title-part-to-left {
			transform: translateX(0) translateY(-100%);
		}
		.title-to-opacity {
			opacity: 0;
			transform: translateX(0) translateY(-20%);
		}
	}

</style>