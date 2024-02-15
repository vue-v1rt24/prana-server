<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    mode?: 'white' | 'dark';
    link?: boolean;
  }>(),
  {
    mode: 'white',
    link: true,
  },
);
</script>

<template>
  <div :class="['order_success', { dark_mode: mode === 'dark' }]">
    <div class="order_success__title">Заявка отправлена</div>

    <div class="order_success__desc">в скором времени мы свяжемся с Вами</div>

    <UiButtonTransparent
      v-if="link"
      title="на главную"
      tag="link"
      link="/"
      :arrow="false"
      mode="white"
      class="order_success__but"
    />
  </div>
</template>

<style lang="css" scoped>
.order_success {
  background-color: white;
  backdrop-filter: blur(59px);
  border-radius: 32px;
  padding: 82px;
}

.order_success.dark_mode {
  background-color: var(--bgColor);
}

/*  */
.order_success__title {
  font-family: var(--fontFamily-RFDewi);
  font-weight: 700;
  font-size: 52px;
  line-height: 110%;
  letter-spacing: 0.02em;
  text-align: center;
  color: #030810;
}

.order_success.dark_mode .order_success__title {
  color: white;
}

/*  */
.order_success__desc {
  font-family: var(--fontFamily-RFDewi);
  font-weight: 400;
  font-size: 26px;
  line-height: 110%;
  letter-spacing: 0.02em;
  text-align: center;
  color: var(--accentColor);
  margin-top: 26px;
}

/*  */
.order_success__but {
  width: 281px;
  height: 103px;
  font-family: var(--fontFamily-RoadRadio);
  font-size: 24px;
  line-height: 130%;
  border-radius: 28px;
  margin: 62px auto 0 auto;
}

.order_success.dark_mode .order_success__but {
  color: white;
}

/* ============================== */
@media (max-width: 800px) {
  .order_success__title {
    font-size: 30px;
  }

  .order_success__desc {
    max-width: 380px;
    font-size: 16px;
    margin: 26px auto 0 auto;
  }

  .order_success__but {
    height: 80px;
    font-size: 20px;
    margin: 50px auto 0 auto;
  }
}

@media (max-width: 576px) {
  .order_success {
    height: 100%;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }
}
</style>
