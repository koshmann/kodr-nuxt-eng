<template>
	<section id="hero" class="relative overflow-hidden transition-all duration-500 ease rounded-2xl" :class="{'showreel-shown': showreelShown}">

		<div class="showreel-part absolute flex items-center justify-end top-0 left-0 w-full h-full rounded-2xl overflow-hidden">
			<div class="bg-gray-darker absolute h-full w-full rounded-2xl">
				<button class="btn absolute z-30 opacity-0 !outline-none !p-4 text-gray-light right-0 top-4 transition-all duration-500 ease hover:bg-gray-light hover:text-gray-dark hover:border-gray-light"
					:class="{'opacity-100 !right-4 delay-0':showreelShown}"
					@click="showreelShown = false"
				>
					<svg width="19" height="19" viewBox="0 0 19 19" fill="none">
						<path d="M17.9852 17.9852L1.01465 1.01465" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M17.9852 1.01479L1.01465 17.9854" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
				<transition name="change-showreel">
					<div v-if="!showreelShown" class="cover-vid">
						<div class="absolute left-1/4 flex items-center h-full w-full transition-all duration-200 ease sm:left-0 sm:items-end" :class="{'!left-0':showreelShown}">
							<video class="" autoplay loop muted playsinline poster="/cover-preview.jpg">  
								<source src="~/assets/Cover-Showreel.mp4"> 
							</video>
						</div>
						<div class="absolute bg-gray-dark opacity-75 w-full h-full" />
					</div>
					<div v-else-if="showreelShown" class="vimeo-vid max-h-full">
						<div>
							<iframe src="https://player.vimeo.com/video/555629321?autoplay=1&color=ff3300&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
						</div>
						<script src="https://player.vimeo.com/api/player.js"></script>
					</div>
				</transition>
				
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

		<div class="title-part relative px-3 py-60 rounded-2xl bg-gray-light transition-all duration-500 ease sm:py-12"
			:class="{'title-part-to-left':showreelShown}"
		>
			<div class="title block max-w-xl transition-all duration-200 ease"
				:class="{'title-to-opacity':showreelShown}"
			>
				<div class="flex-1">
					<h1 class="text-5xl font-title font-medium sm:text-3xl sm:leading-7">
						Интерфейсы. 3D. Фронтенд. <span class="text-gray">Диджитал.</span>
					</h1>
					<p class="pt-4 pb-8 text-gray">
						Создаём сайты, которые раскрывают потенциал Вашего бизнеса.
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
		transform: translateX(-101%);
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

.change-showreel-enter-active {
	animation: change-showreel-in 0.5s ease;
	transform-origin: center center;
}
.change-showreel-leave-active {
	animation: change-showreel-out 0.5s ease;
	transform-origin: center center;
}
@keyframes change-showreel-in {
	0% {
		transform: scale(0);
		opacity: 1;
	}
	100% {
		transform: scale(1);
		opacity: 1;
	}
}
@keyframes change-showreel-out {
	0% {
		transform: scale(1);
		opacity: 1;
	}
	100% {
		opacity: 1;
		transform: scale(0);
	}
}
</style>