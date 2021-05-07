<template>
	<section class="px-3">
		<div class="flex flex-row items-center">
			<div class="flex-1">
				<h1 class="text-5xl font-title">
					Создаём сайты, <span class="text-gray">которые раскрывают потенциал Вашего бизнеса.</span>
				</h1>
				<p class="pt-2 pb-8 text-gray">
					Дизайн. Интерфейсы. 3D графика. Диджитал.
				</p>
				<a class="btn border-red hover:text-white hover:bg-red ">
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
				</a>
			</div>

			<div
				class="flex-1"
				width="750"
				height="750"
			>
				<video
					id="herovideo"
					width="750"
					height="750"
					muted=""
					playsinline=""
					autoplay=""
				>
					<source
						src="~/assets/cover.mp4"
						type="video/mp4"
					>
				</video>
			</div>
		</div>
	</section>
</template>
