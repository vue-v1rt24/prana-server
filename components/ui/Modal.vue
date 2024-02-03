<script setup lang="ts">
import * as FancyboxAll from '@fancyapps/ui';
const { Fancybox } = FancyboxAll;

//
const props = withDefaults(
  defineProps<{
    classWrapper?: string;
    maxWidth?: string;
  }>(),
  {
    classWrapper: '',
    maxWidth: '500px',
  },
);

//
const emit = defineEmits<{
  closeModalEvent: [];
}>();

//
const dialog = ref<HTMLDivElement | null>(null);

const openModal = () => {
  if (dialog.value) {
    Fancybox.show([{ src: dialog.value, type: 'inline' }], {
      mainClass: props.classWrapper,
      on: {
        close() {
          emit('closeModalEvent');
        },
      },
    });
  }
};

const closeModal = () => {
  Fancybox.close();
};

//
onUnmounted(() => {
  Fancybox.destroy();
});

//
defineExpose({
  openModal,
  closeModal,
});
</script>

<template>
  <div ref="dialog" class="fancybox_modal">
    <slot />
  </div>
</template>

<style lang="css" scoped>
.fancybox_modal {
  display: none;
  max-width: v-bind(maxWidth);
  width: 100%;
  background-color: transparent;
  padding: 0;
}

/* ================ Медиа-запросы */
@media (max-width: 576px) {
  .fancybox_modal {
    height: 100%;
  }
}
</style>
