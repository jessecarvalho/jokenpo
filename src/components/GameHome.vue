<template>
  <div class="text-center items-center jutify-center h-screen w-full flex">
    <div class="w-full">
      <div class="w-3/5 pt-16 pb-16 rounded bg-white m-auto shadow-lg">
        <img src="/imgs/icon.png" alt="" class="w-48 mx-auto" />
        <h1 class="text-2xl lowercase font-extrabold">Jokenpo Game</h1>
        <h2 class="text-sm mt-2">rock, paper or scissor?</h2>
        <router-link to="/configuration">
          <button
            class="mt-5 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
          >
            Let's go!
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
