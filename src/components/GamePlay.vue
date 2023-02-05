<template>
  <Modal :show="showModal">
    <h1>{{ finalMessage }}</h1>
    <p>{{ playerPoints }} x {{ botPoints }}</p>
    <button class="bg-gray-300 p-3 rounded-lg mt-3" @click="startNewGame()">
      Play Again!
    </button>
  </Modal>
  <div class="text-center items-center jutify-center min-h-screen h-full w-full flex">
    <div class="w-full">
      <div class="w-5/6 sm:w-3/5 pt-16 pb-16 rounded bg-white m-auto shadow-lg">
        <h1 class="text-2xl lowercase font-extrabold">Jokenpo Game</h1>
        <h2 class="text-sm mt-2"></h2>
        <div class="mt-5">
          <h1 class="text-lg font-black">YOU</h1>
        </div>
        <div class="w-2/3 grid grid-cols-3 text-center m-auto mb-5">
          <div>
            <div
              class="border pt-5 pb-5 cursor-pointer"
              v-bind:class="[getColor('hover'), visualPlayerChoosePaper]"
              @click="playerMove('paper'), incrementMatch()"
            >
              <img
                src="/imgs/game_icons/paper.png"
                alt=""
                class="w-10 m-auto"
              />
              <h3>Paper</h3>
            </div>
          </div>
          <div>
            <div
              class="border pt-5 pb-5 cursor-pointer"
              v-bind:class="[getColor('hover'), visualPlayerChooseRock]"
              @click="playerMove('rock'), incrementMatch()"
            >
              <img src="/imgs/game_icons/rock.png" alt="" class="w-10 m-auto" />
              <h3>Rock</h3>
            </div>
          </div>
          <div>
            <div
              class="border pt-5 pb-5 cursor-pointer"
              v-bind:class="[getColor('hover'), visualPlayerChooseScissor]"
              @click="playerMove('scissor'), incrementMatch()"
            >
              <img
                src="/imgs/game_icons/scissors.png"
                alt=""
                class="w-10 m-auto"
              />
              <h3>Scissor</h3>
            </div>
          </div>
        </div>
        <div
          class="result pt-5 pb-5 w-3/4 m-auto"
          v-bind:class="[messageColor]"
        >
          <h2 class="text-white text-sm mt-2">
            game {{ currentMatch }} of {{ quantityMatches }}
          </h2>
          <h1 class="text-white text-xl">
            {{ playerPoints }} x {{ botPoints }}
          </h1>
          <h1 class="text-white">{{ message }}</h1>
        </div>
        <div class="mt-5">
          <h1 class="text-lg font-black">PC</h1>
        </div>
        <div class="w-2/3 grid grid-cols-3 text-center m-auto mb-5">
          <div>
            <div class="border pt-5 pb-5" v-bind:class="[visualBotChoosePaper]">
              <img
                src="/imgs/game_icons/paper.png"
                alt=""
                class="w-10 m-auto"
              />
              <h3>Paper</h3>
            </div>
          </div>
          <div>
            <div class="border pt-5 pb-5" v-bind:class="[visualBotChooseRock]">
              <img src="/imgs/game_icons/rock.png" alt="" class="w-10 m-auto" />
              <h3>Rock</h3>
            </div>
          </div>
          <div>
            <div
              class="border pt-5 pb-5"
              v-bind:class="[visualBotChooseScissor]"
            >
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
<script>
import { game_configurations } from "/src/stores/game_configurations";
import Modal from "./GameModal.vue";

export default {
  components: {
    Modal,
  },
  methods: {
    playerMove,
    incrementMatch,
    startNewGame,
    endGame,
  },
  data() {
    return {
      playerPoints: 0,
      botPoints: 0,
      currentMatch: 1,
      lastResult: 0,
      message: "",
      finalMessage: "",
      messageColor: "bg-green-500",
      visualPlayerChoosePaper: "",
      visualPlayerChooseRock: "",
      visualPlayerChooseScissor: "",
      visualBotChoosePaper: "",
      visualBotChooseRock: "",
      visualBotChooseScissor: "",
      showModal: false,
    };
  },

  setup() {
    const { quantityMatches, setConfigurations, currentColor, getColor } =
      game_configurations();
    return {
      quantityMatches,
      currentColor,
      setConfigurations,
      getColor,
    };
  },
};

function playerMove(choose) {
  let botChoose = botMove();
  switch (botChoose) {
    case "paper":
      this.visualBotChoosePaper = "bg-yellow-300";
      this.visualBotChooseRock = "";
      this.visualBotChooseScissor = "";
      if (choose == "paper") {
        this.lastResult = 1;
      } else if (choose == "rock") {
        this.lastResult = 2;
      } else if (choose == "scissor") {
        this.lastResult = 0;
      }
      break;
    case "rock":
      this.visualBotChooseRock = "bg-yellow-300";
      this.visualBotChoosePaper = "";
      this.visualBotChooseScissor = "";
      if (choose == "paper") {
        this.lastResult = 0;
      } else if (choose == "rock") {
        this.lastResult = 1;
      } else if (choose == "scissor") {
        this.lastResult = 2;
      }
      break;
    case "scissor":
      this.visualBotChooseScissor = "bg-yellow-300";
      this.visualBotChoosePaper = "";
      this.visualBotChooseRock = "";
      if (choose == "paper") {
        this.lastResult = 2;
      } else if (choose == "rock") {
        this.lastResult = 0;
      } else if (choose == "scissor") {
        this.lastResult = 1;
      }
      break;
  }
  switch (choose) {
    case "paper":
      this.visualPlayerChoosePaper = this.getColor();
      this.visualPlayerChooseScissor = "";
      this.visualPlayerChooseRock = "";
      break;
    case "scissor":
      this.visualPlayerChooseScissor = this.getColor();
      this.visualPlayerChoosePaper = "";
      this.visualPlayerChooseRock = "";
      break;
    case "rock":
      this.visualPlayerChooseRock = this.getColor();
      this.visualPlayerChooseScissor = "";
      this.visualPlayerChoosePaper = "";
      break;
  }
  if (this.lastResult == 0) {
    this.playerPoints += 1;
    this.message = "You won";
    this.messageColor = "bg-green-500";
  } else if (this.lastResult == 1) {
    this.message = "Hmm i was a draw";
    this.messageColor = "bg-yellow-500";
  } else if (this.lastResult == 2) {
    this.botPoints += 1;
    this.message = "You lost it :(";
    this.messageColor = "bg-red-500";
  }
}
function botMove() {
  let randNumber = parseInt(Math.random() * 3) + 1;
  switch (randNumber) {
    case 1:
      return "paper";
    case 2:
      return "rock";
    case 3:
      return "scissor";
  }
}
function incrementMatch() {
  this.currentMatch += 1;
  this.endGame();
}

function endGame() {
  console.log('teste');
  if (this.quantityMatches == this.currentMatch) {
    if (this.playerPoints > this.botPoints) {
      this.finalMessage = "Yuuup you won";
    } else if (this.playerPoints < this.botPoints) {
      this.finalMessage = "Whoops you lose it :(";
    } else {
      this.finalMessage = "Hmmmm we had a draw";
    }
    this.showModal = true;
  }
}

function startNewGame() {
  this.playerPoints = 0;
  this.botPoints = 0;
  this.currentMatch = 1;
  this.lastResult = 0;
  this.message = "";
  this.finalMessage = "";
  this.messageColor = "bg-green-500";
  this.visualPlayerChoosePaper = "";
  this.visualPlayerChooseRock = "";
  this.visualPlayerChooseScissor = "";
  this.visualBotChoosePaper = "";
  this.visualBotChooseRock = "";
  this.visualBotChooseScissor = "";
  this.showModal = false;
}
</script>
