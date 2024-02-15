<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tag?: 'button' | 'link';
    link?: string;
    arrow?: boolean;
    transparent?: boolean;
    title: string;
    mode?: 'white' | 'dark';
  }>(),
  {
    tag: 'button',
    link: '#',
    arrow: true,
    mode: 'dark',
  },
);

//
const bgColor = computed(() => (props.transparent ? 'rgba(64, 182, 183, 0.1)' : 'transparent'));
</script>

<template>
  <button
    v-if="tag === 'button'"
    :class="['btn_bg_1', { white_mode: mode === 'white' }]"
    type="button"
  >
    <span class="btn_bg_1__title">{{ title }}</span>

    <span v-if="arrow" class="btn__arrow">
      <ImageArrow width="12" height="12" class="arrow" />
    </span>
  </button>

  <NuxtLink v-else :class="['btn_bg_1', { white_mode: mode === 'white' }]" :to="link">
    <span class="btn_bg_1__title">{{ title }}</span>

    <span v-if="arrow" class="btn__arrow">
      <ImageArrow width="12" height="12" class="arrow" />
    </span>
  </NuxtLink>
</template>

<style lang="css" scoped>
.btn_bg_1 {
  font-family: var(--fontFamily-RFDewi);
  font-weight: 700;
  line-height: 100%;
  text-transform: uppercase;
  color: white;
  background-color: v-bind(bgColor);
  border: 2px solid var(--accentColor);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  transition: background-color 0.3s;
}

.btn_bg_1.white_mode {
  color: #030810;
}

/*  */
@media (hover: hover) {
  .btn_bg_1:hover {
    background-color: rgba(64, 182, 183, 0.3);
  }
}

.btn_bg_1:active {
  background-color: var(--accentColor);
}

/*  */
.btn__arrow {
  display: inherit;
  transform: translateY(0);
  transition: transform 0.3s;
}

.btn_bg_1 .btn__arrow .arrow {
  fill: var(--accentColor);
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
