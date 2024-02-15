<script setup lang="ts">
type TypeLinks = {
  title: string;
  path?: string;
};

const props = withDefaults(
  defineProps<{
    links: TypeLinks[];
    mode?: 'white' | 'dark';
  }>(),
  {
    mode: 'dark',
  },
);

//
const lastLink = computed(() => {
  return props.links.at(-1);
});

const allLinks = computed(() => {
  if (lastLink.value) {
    return props.links.toSpliced(props.links.lastIndexOf(lastLink.value, 1));
  }

  return [];
});
</script>

<template>
  <div :class="['breadcrumbs', { white_mode: mode === 'white' }]">
    <template v-for="link in allLinks" :key="link.title">
      <NuxtLink :to="link.path">{{ link.title }}</NuxtLink>
      <img class="breadcrumbs__arrow" src="/img/arrow_right.svg" alt="" />
    </template>

    <span>{{ lastLink?.title }}</span>
  </div>
</template>

<style lang="css" scoped>
.breadcrumbs,
.breadcrumbs a {
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0.02em;
  color: #030810;
  opacity: 0.8;
}

.breadcrumbs.white_mode,
.breadcrumbs.white_mode a {
  color: var(--colorTextOpacity08);
}

/*  */
.breadcrumbs__arrow {
  height: 9px;
  margin: -2px 14px 0 14px;
}

.breadcrumbs.white_mode .breadcrumbs__arrow {
}
</style>
