<script setup>
import Button from "./Button.vue";
</script>

<template>
  <div class="banner">
    <div class="container">
    <p>Также по результатам теста<br>
      <b>вы получите</b> подробные <b>советы</b> по определению наиболее перспективной <b>для вашего типа <span class="lower">интеллекта</span> сферы деятельности</b>,
      <br>которая принесет вам скорейший финансовый результат.
    </p>
    <img src="../assets/images/baner2image.jpg" alt="brain image">
    <Button>пойти тест</Button>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background-color: var(--color-white);
  color: var(--text-color-grey);
  padding-top: 38px;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 31px;
}

p {
  padding-left: 1px;
  letter-spacing: 0.8px;
  margin-bottom: 26px;
}

b {
  text-transform: uppercase;
}

img {
  display: block;
  margin: 0 auto;
}

button {
  position: relative;
  top: -9px;
  left: -3px;
  min-width: 199px;
  padding-bottom: 12px;
}
</style>


