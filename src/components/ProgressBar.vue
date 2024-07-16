<script setup>
import {computed, ref} from "vue";
import Menu from "./Menu.vue";
import Burg from "./Burg.vue";

defineProps({
  completed: String
})

const styles = computed(() => {
  return {
    width: `${completed}%`,
  };
});


</script>

<template>
  <div class="progress-bar">
    <div class="progress-bar__progress" :style="styles">
<!--      <span class="label">{{ `${completed}%` }}</span>-->
    </div>
  </div>
</template>

<style scoped>

.progress-bar {
  --progress-bg-color-default: #F2F3F3;
  --progress-bg-color-success: #3BDE7C;

  height: 20px;
  width: 85vw;
  display: block;
  margin: 0 auto;
  background-color: var(--progress-bg-color-default);
  border-radius: 50px;
}

.progress-bar__progress {
  height: 20px;
  background-color: var(--progress-bg-color-success);
  border-radius: inherit;
  transition: width 1s ease-in-out;
}

</style>


