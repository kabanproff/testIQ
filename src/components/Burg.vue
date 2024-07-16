<script setup>
const props = defineProps({
  isOpen: Boolean
})
console.log(props.isOpen)
</script>

<template>
      <button
        class="burg"
        :class="isOpen ? 'active' : ''"
        type='button'
        @click="$emit('closeMenu')"
      >
        <span></span>
      </button>
  </template>

<style scoped>

.burg {
  --burg-color: var(--color-grey-1);

  width: 30px;
  height: 30px;
  position: relative;
  left: 2px;
  top: 2px;
  transition: all 0.25s ease-in-out;
}

.burg span {
  user-select: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.burg span,
.burg span::before,
.burg span::after {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--burg-color);
  transition-property: background-color, transform;
  transition-duration: 0.3s;
}

.burg span::before,
.burg span::after {
  position: absolute;
  content: "";
}

.burg span::before {
  top: -7px;
}

.burg span::after {
  top: 7px;
}

/* active */
.active.burg {
  --burg-color: var(--color-primary);
  left: calc(100% - 2px);
  transform: translateX(-100%);
  top: 4px;
}

.active.burg span {
  background-color: transparent;
}

.active.burg span::before {
  transform: translateY(7px) rotate(45deg);
}

.active.burg span::after {
  transform: translateY(-7px) rotate(-45deg);
}

.active.burg span,
.active.burg span::before,
.active.burg span::after {
  width: 34px;
  height: 4px;
}

</style>


