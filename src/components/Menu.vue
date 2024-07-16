<script setup>


// defineEmits('closeMenu')


</script>

<template>
  <nav>
    <ul class="container">
      <li><router-link @click="$emit('closeMenu')" active-class="active" to="/">Главная</router-link></li>
      <li><router-link @click="$emit('closeMenu')" active-class="active" to="/info">Информация о тесте</router-link></li>
      <li><router-link @click="$emit('closeMenu')" active-class="active" to="/test">пройти тест</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  font-family: var(--roboto-font);
  font-weight: var(--font-light);
  height: 0;
  opacity: 0;
  transition: all 0.25s ease-in-out;
  text-transform: uppercase;

  .modalOpened & {
    height: 100vh;
    opacity: 1;
  }

  ul {
    padding: 66px 13px;
  }

  li {
    margin-bottom: 22px;
  }
}




</style>


