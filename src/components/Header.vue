<script setup>
import {ref} from "vue";
import Menu from "./Menu.vue";
import Burg from "./Burg.vue";

defineProps({
  route: String
})

const isOpen = ref(false);
const closeMenu = (e) => {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <header :class="isOpen ? 'modalOpened': ''">

    <div class="container">
      <Burg @closeMenu="closeMenu" :isOpen="isOpen"/>
      <div class="page-title" v-if="route === 'test'">
        <img class="logo" src="../assets/images/rain_bk3.png" alt="logo test">
        <span class="test-title text-primary">тест на определение IQ</span>
      </div>
    </div>
    <Menu @closeMenu="closeMenu"/>
  </header>
</template>

<style scoped>
header {
  background-color: var(--body-bg);
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  padding-top: 8px;
  padding-bottom: 8px;
  z-index: 10;
  transition: all 0.25s ease-in-out;

  &.modalOpened {
    padding-top: 13px;
    padding-bottom: 13px;
  }
}

.container {
  display: flex;
  align-items: center;
  position: relative;
}

.page-title {
  align-items: center;
  flex-grow: 1;
  margin-left: 8px;
  padding-left: 57px;
  position: relative;

}

.test-title {
  font-family: var(--yeseva-font);
  text-transform: uppercase;
  font-size: 13px;
}

.logo {
  width: 48px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

</style>


