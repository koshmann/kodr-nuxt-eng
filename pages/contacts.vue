<template>
    <section class="px-3 mx-3 pt-36 pb-36 bg-gray-light rounded">
      <div class="grid grid-cols-2 justify-between items-baseline pb-4 mb-16 border-gray-medium border-b">
        <h2 class="text-gray-dark text-4xl font-medium">Контакты</h2>
        <div class="text-gray text-right">
          <p>Будем рады познакомиться!</p>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div class="grid grid-cols-2">
            <div>
              <p class="text-sm text-gray mb-2">Телефон</p>
              <a href="#" class="kodr-underline hover:text-red transition-colors duration-200">
                  <span>+7 (123) 456 78 90</span>
              </a>
            </div>
            <div>
              <p class="text-sm text-gray mb-2">Email</p>
              <a href="#" class="kodr-underline hover:text-red transition-colors duration-200">
                  <span>info@kodr.agency</span>
              </a>
            </div>
        </div>
        <div class="">
            <p class="text-sm text-gray mb-2">Медиа</p>
            <div class="grid grid-cols-4">
                  <div>
                      <a href="#" class="kodr-underline hover:text-red transition-colors duration-200">
                          <span>Instagram</span>
                      </a>
                  </div>
                  <div>
                      <a href="#" class="kodr-underline hover:text-red transition-colors duration-200">
                          <span>Behance</span>
                      </a>
                  </div>
                  <div>
                      <a href="#" class="kodr-underline hover:text-red transition-colors duration-200">
                          <span>Telegram</span>
                      </a>
                  </div>
                  <div>
                      <a href="#" class="kodr-underline hover:text-red transition-colors duration-200">
                          <span>What'sApp</span>
                      </a>
                  </div>
            </div>
        </div>
      </div>
    </section>
</template>

<script>
  import { myPage } from "~/utils/transitions.js";
  export default {
    transition: myPage
  }

</script>

<style>

</style>