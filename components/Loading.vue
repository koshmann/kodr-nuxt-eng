<template>
	<div class="flex justify-center py-16">
		<div class="inline-flex flex-row justify-center items-center">
			<div
				id="loading-logo"
				class="text-center logo px-4 border-r border-gray-darker"
			>
				<svg width="52" height="28" viewBox="0 0 52 28" fill="none" class="loading-logo">
					<rect x="3" y="3" width="46" height="22" rx="11"
						stroke="white" stroke-width="5"
					/>
					<circle opacity="0.2" cx="38" cy="14" r="12" fill="#FF3300" />
					<circle opacity="0.4" cx="38" cy="14" r="10" fill="#FF3300" />
					<circle opacity="0.6" cx="38" cy="14" r="8" fill="#FF3300" />
					<circle opacity="0.8" cx="38" cy="14" r="6" fill="#FF3300" />
					<circle cx="38" cy="14" r="4" fill="#FF3300" />
				</svg>

			</div>

			<div class="text-gray px-4 inline text-center">
				<p>Загружаем...</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>

	.loading-logo {
		transition: .3s ease;
		rect {
			animation: kodr-path-loading .9s ease infinite alternate;
		}
		circle {
			animation: kodr-dot-loading .9s ease infinite alternate;
		}
		// &:not(:hover) {
		// 	path {
		// 		color: #828282;
		// 	}
		// 	.logo-dot {
		// 		fill: #828282;
		// 		r: 4px;
		// 		cx: 34px;
		// 	}
		// }
	}

	@keyframes kodr-dot-loading {
		0% {
			fill: #828282;
			r: 4px;
			cx: 14px;
		}
		100% {
			fill: #FF3300;
		}
	}
	@keyframes kodr-path-loading {
		from {
			stroke: #828282;
		}
		to {
			stroke: #fff;
		}
	}

</style>>

