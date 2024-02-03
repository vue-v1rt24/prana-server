<script setup lang="ts">
const props = defineProps<{
  image: string;
  width: string;
  link: string;
  title: string;
  desc: string;
}>();
</script>

<template>
  <div class="cart">
    <div class="cart__img_bx">
      <img class="cart__ellipse" src="/img/services/service-cart-ellipse.svg" alt="" />
      <NuxtImg :src="image" :width="width" format="avif" loading="lazy" class="cart__img" />
    </div>

    <div class="cart__text">
      <h2 class="cart_title">{{ title }}</h2>
      <p class="cart__desc">{{ desc }}</p>
      <UiButtonTransparent tag="a" :link="link" title="Перейти" class="cart__btn" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.cart {
  position: relative;
  width: 620px;
  background-color: #060e1b;
  border-radius: 42px;
}

/*  */
.cart__img_bx {
  height: 306px;
}

.cart__img {
  position: relative;
  z-index: 2;
}

/*  */
.cart__ellipse {
  position: absolute;
  top: -210px;
  left: 0;
  z-index: 1;
}

/*  */
.cart__text {
  position: relative;
  z-index: 3;
  color: white;
  padding: 20px 52px 52px 52px;
}

.cart_title {
  font-family: var(--fontFamily-RFDewi);
  font-size: 32px;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0.64px;
  margin-bottom: 24px;
}

.cart__desc {
  max-width: 419px;
  font-size: 22px;
  font-weight: 300;
  line-height: 140%;
  margin-bottom: 40px;
}

/*  */
.cart__btn {
  width: 100%;
  height: 103px;
  font-family: var(--fontFamily-RoadRadio);
  font-size: 24px;
  border-radius: 28px;
  column-gap: 10px;
}

.cart__btn :deep(.arrow) {
  width: 15px;
  height: 15px;
}

/* =========== Медиа запросы */
</style>
