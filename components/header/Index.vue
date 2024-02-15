<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    mode?: 'white' | 'dark';
  }>(),
  {
    mode: 'dark',
  },
);

//
const viewport = useViewport();
const route = useRoute();
</script>

<template>
  <header :class="['header_bx', { white_mode: mode === 'white' }]">
    <div class="container">
      <div class="header">
        <!--  -->
        <div class="logo">
          <NuxtLink v-if="route.name !== '/'" to="/">
            <img v-if="mode === 'dark'" src="/img/logo.svg" alt="" />
            <img v-if="mode === 'white'" src="/img/logo-white.svg" alt="" />
          </NuxtLink>

          <template v-else>
            <img v-if="mode === 'dark'" src="/img/logo.svg" alt="" />
            <img v-if="mode === 'white'" src="/img/logo-white.svg" alt="" />
          </template>
        </div>

        <!--  -->
        <Social v-if="!viewport.isLessThan('desktopMedium')" />

        <!--  -->
        <div class="header__tel_but">
          <a
            v-if="!viewport.isLessThan('desktop')"
            class="header__tel tel link"
            href="tel:88005008154"
          >
            8 800 500 81 54
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="css" scoped>
.header_bx {
  padding: 40px 0 52px 0;
}

/*  */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/*  */
.logo {
  width: 273px;
}

/*  */
.header__tel_but {
  display: flex;
  align-items: center;
  column-gap: 62px;
}

/* ================ Медиа-запросы */
@media (max-width: 768px) {
  .header_bx {
    padding: 37px 0;
  }

  .logo {
    width: 210px;
  }
}

@media (max-width: 576px) {
  .header_bx {
    padding: 15px 0 32px 0;
  }

  .logo {
    width: 170px;
  }
}
</style>
