<script setup>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import {useRouter} from "vue-router";
const router =  useRouter();
console.log(router)

</script>

<template>
  <Header />
    <router-view/>

  <Footer/>
  <div>
  </div>
</template>

