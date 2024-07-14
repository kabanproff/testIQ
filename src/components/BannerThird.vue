<script setup>
import IconTop from '../assets/arrowTop.svg?component';
import Button from "./Button.vue";
</script>

<template>
  <div class="banner">
    <div class="container">
    <p>Прохождение теста займет у<br> вас не более
      <span class="text-primary">12 минут</span>, а его<br> <b>результаты</b> вы сможете <span class="text-primary">использовать всю жизнь.</span>
    </p>
      <div class="field">Профессиональная интерпретация и детально <b>проработанные рекомендации</b> позволят вам качественно <b>изменить все аспекты своей жизни:</b> от финансового до любовного.</div>
    <Button secondary>пойти тест</Button>
    </div>
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  padding-top: 54px;
  padding-left: 1px;
  font-family: var(--merriw-font);
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.7px;
  padding-bottom: 45px;
}

.banner::before,
.banner::after {
  content: '';
  display: block;
  position: absolute;
  width: 65px;
  height: 200px;
  z-index: -1;
}

.banner::before {
  background-image: url("../assets/images/lightning_l.png");
  bottom: 21px;
}

.banner::after {
  background-image: url("../assets/images/lightning_r.png");
  right: 0;
  width: 123px;
  top: 64px;
}

.field {
  background-color: rgba(243, 243, 242, 0.8);
  border-radius: 20px;
  padding: 29px 14px 26px;
  margin-right: -2px;
  margin-left: -2px;
  color: var(--text-color-black-2);
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.8px;
  margin-bottom: 33px;
}

.text-primary {
  letter-spacing: 1.2px;
}

p {
  margin-bottom: 21px;
}

button {
  min-width: 199px;
  padding-bottom: 10px;
}

b {
  letter-spacing: 0.8px;
}
</style>


