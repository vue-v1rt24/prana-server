<script setup lang="ts">
const props = defineProps<{
  width: string;
  height: string;
}>();
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_1016_55"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="12"
      height="12"
    >
      <rect width="12" height="12" />
    </mask>
    <g mask="url(#mask0_1016_55)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.011 1.75092H2.36996V0H12V10.0678H10.2491V2.989L1.23809 12L0 10.7619L9.011 1.75092Z"
      />
    </g>
  </svg>
</template>

<style lang="css" scoped></style>
