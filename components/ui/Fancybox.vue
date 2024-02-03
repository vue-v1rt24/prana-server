<script setup lang="ts">
import * as FancyboxAll from '@fancyapps/ui';
const { Fancybox } = FancyboxAll;
import { type OptionsType } from '@fancyapps/ui/types/Fancybox/options.d';
// import '@fancyapps/ui/dist/fancybox/fancybox.css'; // прописали в файле плагина (папка plugins)

//
const props = defineProps<{
  options?: Partial<OptionsType>;
}>();

//
const container = ref<HTMLDivElement | null>(null);
//
onMounted(() => {
  Fancybox.bind(container.value, '[data-fancybox]', {
    ...(props.options || {}),
  });
});

onUpdated(() => {
  Fancybox.unbind(container.value);
  Fancybox.close();

  Fancybox.bind(container.value, '[data-fancybox]', {
    ...(props.options || {}),
  });
});

onUnmounted(() => {
  Fancybox.destroy();
});
</script>

<template>
  <div ref="container">
    <slot />
  </div>
</template>

<style lang="css" scoped></style>
