<script setup>


// defineEmits('closeMenu')


</script>

<template>
  <nav>
    <ul class="container">
      <li><router-link @click="$emit('closeMenu')" active-class="active" to="/">Home</router-link></li>
      <li><router-link @click="$emit('closeMenu')" active-class="active" to="/info">Информация о тесте</router-link></li>
      <li><router-link @click="$emit('closeMenu')" active-class="active" to="/test">пройти тест</router-link></li>
<!--        <a href="/">Главная</a></li>-->
<!--        <a href="/info">Информация о тесте</a></li>-->
<!--        <a href="/test">пройти тест</a></li>-->
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

  .active & {
    height: 100vh;
    opacity: 1;
  }
}




</style>


