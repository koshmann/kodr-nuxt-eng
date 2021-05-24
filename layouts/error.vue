<template>
	<div class="block mx-3 p-3 py-6 bg-gray-light rounded-2xl text-center">
		<h1 v-if="error.statusCode === 404" class="text-3xl font-medium mb-4">404. Страница не найдена :(</h1>
		<h1 v-else class="text-3xl font-medium mb-4">При загрузке произошла ошибка. Попробуйте перезагрузить страницу или вернуться на главную.</h1>
		<NuxtLink class="btn bg-red text-white" to="/">На главную</NuxtLink>
	</div>
</template>

<script>
export default {
	props: ['error']
}
</script>