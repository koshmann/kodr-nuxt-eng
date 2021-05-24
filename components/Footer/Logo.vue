<template>
	<div id="logo" class="text-center logo">
		<nuxt-link to="/" title="KODR Agency" rel="home">
			<svg
				class="footer-logo inline"
				width="50"
				height="26"
				viewBox="0 0 50 26"
				fill="none"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M36.1272 0H13.8728C6.46858 0 0 5.32349 0 13C0 20.6765 6.46858 26 13.8728 26H36.1272C43.5314 26 50 20.6765 50 13C50 5.32348 43.5314 0 36.1272 0ZM13 21C8.58172 21 5 17.4182 5 13C5 8.58171 8.58174 5 13 5H37C41.4183 5 45 8.58172 45 13C45 17.4183 41.4183 21 37 21H13Z"
					fill="#F2F2F2"
				/>
				<circle
					class="logo-dot"
					opacity="0.2"
					cx="37"
					cy="13"
					r="12"
					fill="#FF3300"
				/>
				<circle
					class="logo-dot"
					opacity="0.4"
					cx="37"
					cy="13"
					r="10"
					fill="#FF3300"
				/>
				<circle
					class="logo-dot"
					opacity="0.6"
					cx="37"
					cy="13"
					r="8"
					fill="#FF3300"
				/>
				<circle
					class="logo-dot"
					opacity="0.8"
					cx="37"
					cy="13"
					r="6"
					fill="#FF3300"
				/>
				<circle class="logo-dot logo-dot-8" cx="37" cy="13" r="4" fill="#FF3300" />
			</svg>
		</nuxt-link>
	</div>
</template>

<style>
.footer-logo .logo-dot {
	transition: 0.3s ease;
	transform-origin: center center;
    transform-box: fill-box;
}

.footer-logo:not(:hover) .logo-dot:not(.logo-dot-8) {
    fill: #828282;
    transform: translateX(-24px) scale(0);
}
.footer-logo:not(:hover) .logo-dot-8 {
    fill: #828282;
    transform: translateX(-24px);
}
</style>
