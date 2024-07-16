<script setup>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import {useRoute} from "vue-router";
import {onMounted, watch} from "vue";
const route = useRoute();
console.log(route)
//
// onMounted(() => {
//   console.log(route.name)
// });
// watch(route, () => {
//   console.log(route.name)
// });




console.log(route)

</script>

<template>
  <Header :route="route.name"/>
    <router-view/>
  <Footer/>
</template>

