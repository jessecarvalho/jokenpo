import { ref } from "vue";
// import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const game_configurations = defineStore("game_configurations", () => {
  const quantityMatches = ref(7);
  const currentColor = ref("purple");
  function setConfigurations(newQuantityMatches, newCurrentColor) {
    quantityMatches.value = parseInt(newQuantityMatches);
    currentColor.value = newCurrentColor;
  }
  function getColor(type = "") {
    let pre = "";
    if (type == "hover") {
      pre = "hover:";
    } else {
      pre = "";
    }
    if (currentColor.value == "purple") {
      return pre + "bg-purple-200";
    } else if (currentColor.value == "pink") {
      return pre + "bg-pink-200";
    } else if (currentColor.value == "blue") {
      return pre + "bg-blue-200";
    } else if (currentColor.value == "red") {
      return pre + "bg-red-200";
    }
  }

  return {
    quantityMatches,
    setConfigurations,
    currentColor,
    getColor,
  };
});
