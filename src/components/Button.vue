<script setup>
import IconTop from '../assets/arrowTop.svg?component';

// interface Props {
//   secondary?: Boolean
// }
defineProps({
  secondary: Boolean
})
//
// withDefaults(defineProps<{
//   type: String
// }>, {
//   type: 'primary',
// });
// withDefaults(defineProps<Props>(), {
//   type: 'primary',
// })
</script>

<template>
  <button
    :class="secondary ? 'btn-secondary': 'btn-primary'"
  >
    <slot/>
  </button>
</template>

<style scoped>

button {
  text-transform: uppercase;
  font-weight: var(--font-bold);
  display: block;
  margin: 0 auto;
  min-width: 189px;
  letter-spacing: 1.4px;
}

</style>


