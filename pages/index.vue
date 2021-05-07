<template>
	<div
		id="main"
		class="bg-gray-light mx-3 rounded"
	>
		<main-page-hero />
		<main-page-projects />
		<main-page-number-features />
	</div>
</template>

<script>
// import { myPage } from "~/utils/transitions.js";
// export default {
// 	transition: myPage
// }
</script>

<style>
  .btn {
    @apply inline-flex flex-row items-center px-6 py-3 border-2 cursor-pointer rounded transition-all duration-200 hover:transform hover:scale-95
  }
  .tag {
      @apply inline-flex flex-row items-center px-6 py-3 mr-3 border-2 cursor-pointer rounded transition-all duration-200 hover:text-white hover:transform hover:scale-95
  }
  .btn-link {
      @apply text-gray inline-flex items-center hover:text-gray-dark transition-colors duration-200
  }
  .btn-link span::before {
    content: "";
    bottom: -1px;
    left: 0;
    position: absolute;
    height: 1px;
    width: 100%;
    background: currentColor;
  }
</style>