<script setup>
import IconTop from '../assets/arrowTop.svg?component';
import Button from "./Button.vue";
</script>

<template>
  <div class="banner">
    <div class="container">

    <p>Прохождение теста займет у вас не более
      <span class="text-primary">12 минут</span>
      , а его результаты вы сможете <span class="text-primary">использовать всю жизнь.</span>
    </p>
      <div class="field">Профессиональная интерпретация и детально <b>проработанные рекомендации</b> позволят вам качественно <b>изменить все аспекты своей жизни:</b> от финансового до любовного.</div>
    <Button secondary>пойти тест</Button>
    </div>

  </div>

</template>

<style scoped>
.banner {
  position: relative;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
  }

  &::before {
    //z-index: -1;
    background-image: url("../assets/images/lightning_l.png");
    //background-position: center;
  }

  &::after {
    //z-index: -1;
    background-image: url("../assets/images/lightning_r.png");
  }
}

.field {
  background-color: rgba(243, 243, 242, 0.8);
  border-radius: 20px;
  //padding-top: 20px;
  //padding-bottom: 20px;
  padding: 15px 20px;
  color: var(--text-color-black-2);
}

</style>


