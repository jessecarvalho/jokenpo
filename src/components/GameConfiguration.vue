<template>
  <div class="text-center items-center jutify-center h-screen w-full flex">
    <div class="w-full">
      <div class="w-5/6 sm:w-3/5 pt-16 pb-16 rounded bg-white m-auto shadow-lg">
        <label for="">How many matches do you want?</label>
        <div class="w-1/2 mt-3 m-auto">
          <select
            v-model="quantityMatches"
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option value="7">7</option>
            <option value="15">15</option>
            <option value="30">30</option>
          </select>
        </div>
        <label for="">What color do you want?</label>
        <div class="w-1/2 mt-3 m-auto">
          <select
            v-model="currentColor"
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option value="purple">Purple</option>
            <option value="pink">Pink</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
          </select>
        </div>
        <router-link to="/game">
          <button
            @click="setConfigurations(quantityMatches, currentColor)"
            class="mt-5 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
          >
            Start!
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { game_configurations } from "/src/stores/game_configurations";
export default {
  setup() {
    const { quantityMatches, setConfigurations, currentColor } =
      game_configurations();
    return {
      quantityMatches,
      currentColor,
      setConfigurations,
    };
  },
};
</script>
