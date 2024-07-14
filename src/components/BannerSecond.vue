<script setup>
import Button from "./Button.vue";
</script>

<template>
  <div class="banner">
    <div class="container">
    <p>Также по результатам теста
      <b>вы получите</b> подробные <b>советы</b> по определению наиболее перспективной <b>для вашего типа <span class="lower">интеллекта</span> сферы деятельности</b>,
      которая принесет вам скорейший финансовый результат.
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
}
p {
  letter-spacing: 1.4px;
}

b {
  text-transform: uppercase;
}
</style>


