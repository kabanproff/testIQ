<script setup>
import IconTop from '../assets/arrowTop.svg?component';
import BannerFirst from "./BannerFirst.vue";
import Quote from "./Quote.vue";
import BannerSecond from "./BannerSecond.vue";
import BannerThird from "./BannerThird.vue";
</script>

<template>
  <div class="info">
    <BannerFirst/>
    <Quote>
      Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта,
      но и выработать список рекомендаций для повышения этого показателя.
    </Quote>
    <BannerSecond/>
    <BannerThird/>
     </div>

</template>

<style scoped>
.info {
  //text-align: center;
  padding-top: 26px;
}

</style>


