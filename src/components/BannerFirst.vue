<script setup>
import IconTop from '../assets/arrowTop.svg?component';
import Button from "./Button.vue";
</script>

<template>
  <div class="banner container">
    <p>Пройдите точный и быстрый</p>
    <h1>тест на определение IQ</h1>
    <img src="../assets/images/rain_bk3.png" alt="brain image">
    <Button>пРойти тест</Button>
    <p><span class="text-primary">И получите рекомендации
      по развитию своего интеллекта</span>
      и улучшению финансового благосостояния и личной жизни</p>
    <button class="toTop">
      <span>
        <IconTop/>
      </span>
      подробнее
    </button>
  </div>

</template>

<style scoped>
.banner {
  text-align: center;
}

h1 {
  color: var(--color-primary);
  text-transform: uppercase;
  padding-left: 20px;
  padding-right: 20px;
}

.toTop {
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    background-color: var(--color-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
  }
}
</style>


