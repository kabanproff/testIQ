<script setup>
import {ref} from "vue";
import Menu from "./Menu.vue";
import Burg from "./Burg.vue";

const isOpen = ref(false);
const closeMenu = (e) => {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <header :class="isOpen ? 'modalOpened': ''">

    <div class="container">
      <Burg @closeMenu="closeMenu" :isOpen="isOpen"/>
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
  transition: all 0.25s ease-in-out ;

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

</style>


