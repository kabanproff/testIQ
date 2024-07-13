<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import {ref} from "vue";
import Menu from "./Menu.vue";

const isOpen = ref(false);
const clearMenu = (e) => {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <header :class="isOpen ? 'active': ''">

    <div class="container">
      <button
        class="burg"
        type='button'
        @click="isOpen=!isOpen"
      >
        <span></span>
      </button>
    </div>
    <Menu @closeMenu="clearMenu"/>
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
  //height: 46px;

  &.active {
    //height: 100vh;
  }
}



.container {
  display: flex;
  align-items: center;
  position: relative;
}

.burg {
  --burg-color: var(--color-grey-1);

  width: 30px;
  height: 30px;
  position: relative;
  left: 0;
  transition: all 0.25s ease-in-out;

  span {
    user-select: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  span,
  span::before,
  span::after {
    display: block;
    width: 20px;
    height: 2px;
    background-color: var(--burg-color);
    transition-property: background-color, transform;
    transition-duration: 0.3s;
  }

  span::before,
  span::after {
    position: absolute;
    content: "";
  }

  span::before {
    top: -7px;
  }

  span::after {
    top: 7px;
  }
}

.active .burg {
  --burg-color: var(--color-primary);
  left: 100%;
  transform: translateX(-100%);

  span {
    background-color: transparent;
  }

  span::before {
    transform: translateY(7px) rotate(45deg);
  }

  span::after {
    transform: translateY(-7px) rotate(-45deg);
  }
}

</style>


