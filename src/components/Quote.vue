<script setup>
import IconQuote from '../assets/quote.svg?component';
</script>

<template>
    <div class="quote">
  <div class="container">

      <icon-quote class="quote__top"/>
      <slot/>
      <icon-quote class="quote__bottom"/>

    </div>
  </div>
</template>

<style scoped>

.quote {
  padding-top: 15px;
  padding-bottom: 15px;
  position: relative;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    top: 0;
  }

  &::before {
    z-index: -1;
    background-image: url("../assets/images/bq-bg.png");
    background-position: center;
  }

  &::after {
    z-index: -1;
    background: radial-gradient(84.34% 50.29% at 48.75% 49.71%, #2950C2 0%, rgba(38, 91, 199, 0.96) 40.62%, rgba(39, 98, 187, 0) 85.42%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  }

}
.container {
  display: flex;
  flex-direction: column;

}

.quote__top,
.quote__bottom {
  display: block;
}

.quote__bottom {
  align-self: end;
}

</style>


