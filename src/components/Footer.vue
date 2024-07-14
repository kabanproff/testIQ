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
      <div class="footer__copy" v-else>&copy;&nbsp;2019</div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  text-align: center;
  font-size: 10px;
  line-height: 23px;
  letter-spacing: 1px;
  font-family: var(--roboto-font);
  padding: 8px 0;
}

.footer__copy {
  margin-right: 27px;
}
</style>

//.footer__copy span {
//  font-size: 12px;
//}

