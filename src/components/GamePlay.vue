<template>
  <div class="text-center items-center jutify-center h-screen w-full flex">
    <div class="w-full">
      <div class="w-3/5 pt-16 pb-16 rounded bg-white m-auto shadow-lg">
        <h1 class="text-2xl lowercase font-extrabold">Jokenpo Game</h1>
        <h2 class="text-sm mt-2">rock, paper or scissor?</h2>
        <div class="w-2/3 grid grid-cols-3 text-center m-auto mt-5 mb-5">
          <div>
            <div class="border pt-5 pb-5 hover:bg-purple-100 cursor-pointer">
              <img
                src="/imgs/game_icons/paper.png"
                alt=""
                class="w-10 m-auto"
              />
              <h3>Paper</h3>
            </div>
          </div>
          <div>
            <div class="border pt-5 pb-5 hover:bg-purple-100 cursor-pointer">
              <img src="/imgs/game_icons/rock.png" alt="" class="w-10 m-auto" />
              <h3>Rock</h3>
            </div>
          </div>
          <div>
            <div class="border pt-5 pb-5 hover:bg-purple-100 cursor-pointer">
              <img
                src="/imgs/game_icons/scissors.png"
                alt=""
                class="w-10 m-auto"
              />
              <h3>Scissor</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
