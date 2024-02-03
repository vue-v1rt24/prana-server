<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    arrow?: boolean;
  }>(),
  {
    type: 'button',
  },
);
</script>

<template>
  <button class="btn_bg_1" :type="type">
    <span>{{ title }}</span>

    <span v-if="arrow" class="btn__arrow">
      <ImageArrow width="15" height="15" class="arrow" />
    </span>
  </button>
</template>

<style lang="css" scoped>
.btn_bg_1 {
  font-family: var(--fontFamily-RFDewi);
  font-weight: 800;
  line-height: 130%;
  text-transform: uppercase;
  color: white;
  background-color: var(--accentColor);
  border: none;
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  transition: background-color 0.3s;
}

/*  */
@media (hover: hover) {
  .btn_bg_1:hover {
    background-color: #4ccecf;
  }
}

.btn_bg_1:active {
  background-color: #328f8f;
}

/*  */
.btn__arrow {
  transform: translateY(0);
  transition: transform 0.3s;
}

.btn_bg_1 .btn__arrow .arrow {
  fill: white;
}

.btn_bg_1:hover .btn__arrow {
  animation: swing 0.8s ease;
}

.btn_bg_1:active .btn__arrow .arrow {
  fill: white;
}

/*  */
@keyframes swing {
  15% {
    transform: translateY(0);
  }

  30% {
    transform: translateY(-9px);
  }
  40% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
  65% {
    transform: translateY(0);
  }
}
</style>
