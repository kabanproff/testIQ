<script setup>
import IconTop from '../assets/arrowTop.svg?component';
import Button from "./Button.vue";
</script>

<template>
  <div class="banner container">
    <div class="banner__title">Пройдите точный и быстрый</div>
    <h1>тест на <span>определение</span> IQ</h1>
    <img src="../assets/images/rain_bk3.png" alt="brain image">
    <Button>пРойти тест</Button>
    <p class="banner__subtitle"><span class="text-primary">
      И&nbsp;получите рекомендации&nbsp;<br>по развитию своего интеллекта</span>
      и&nbsp;улучшению финансового благосостояния и&nbsp;личной жизни</p>
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

.banner__title {
  font-size: 18px;
  letter-spacing: 0.9px;
  margin-bottom: 15px;
}

.banner__subtitle {
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 1.4px;
  margin-bottom: 15px;
}

img {
  width: 53%;
  display: inline-block;
  margin-right: 21px;
  margin-top: -7px;
  margin-bottom: 4px;
}

button {
  margin-bottom: 22px;
}

h1 {
  color: var(--color-primary);
  text-transform: uppercase;
  padding-left: 20px;
  padding-right: 20px;
}

h1 span {
  letter-spacing: 1.1px;
  display: inline-block;
}

.toTop {
  display: flex;
  margin: 0 auto 12px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--color-white);
  font-size: 8px;
  text-transform: capitalize;
}

.toTop span {
  background-color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-bottom: 4px;
}
</style>


