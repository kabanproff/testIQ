<script setup>
import {useRouter} from "vue-router";

// const
defineProps({
  secondary: Boolean
})
</script>

<template>
  <router-link
    to="test"
    custom
    v-slot="{ navigate }"
  >
    <button
      :class="secondary ? 'btn-secondary': 'btn-primary'"
      @click="navigate"
    >
      <slot/>
    </button>
  </router-link>
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


