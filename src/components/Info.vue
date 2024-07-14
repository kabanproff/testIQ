<script setup>
import BannerFirst from "./BannerFirst.vue";
import Quote from "./Quote.vue";
import BannerSecond from "./BannerSecond.vue";
import BannerThird from "./BannerThird.vue";
</script>

<template>
  <div class="info">
    <BannerFirst/>
    <Quote>
      Профессиональный<br> IQ-тест позволяет не только определить коэффициент вашего интеллекта,<br>
      но и выработать список рекомендаций для повышения этого показателя.
    </Quote>
    <BannerSecond/>
    <BannerThird/>
  </div>
</template>

<style scoped>
.info {
  padding-top: 26px;
}
</style>


