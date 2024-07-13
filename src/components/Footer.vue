<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
onMounted(() => {
  console.log(route.name)
});
watch(route, () => {
  console.log(route.name)
});


console.log(route)
const clearMenu = (e) => {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <footer>

    <div class="container">
      <div v-if="route.name === 'done'">!!!!!!!Text!!!!!!!</div>
      <div v-else >2024</div>

    </div>
  </footer>
</template>

<style scoped>
footer {
  text-align: center;
}

</style>


