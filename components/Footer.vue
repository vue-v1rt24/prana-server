<script setup lang="ts">
const footerEmail = ref<HTMLDivElement | null>(null);
const footerRight = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (window.matchMedia('(max-width: 992px)').matches) {
    if (footerEmail.value && footerRight.value) {
      footerEmail.value?.after(footerRight.value);
    }
  }
});
</script>

<template>
  <footer class="footer_bx">
    <div class="container">
      <div class="footer">
        <div class="footer__left">
          <a class="footer__email link" ref="footerEmail" href="mailto:info@pranait.ru">
            info@pranait.ru
          </a>

          <div class="footer__copy">
            <p class="footer__desc">LLC PRANA IT</p>
            <a class="footer__desc" href="#">Политика конфиденциальности</a>
          </div>
        </div>

        <div class="footer__right" ref="footerRight">
          <div class="footer__line">
            <div class="footer__desc">Горячая линия</div>
            <a class="link" href="tel:88005008154">8 800 500 81 54</a>
          </div>

          <div class="footer__line">
            <div class="footer__desc">Отдел разработки</div>
            <a class="link" href="tel:+79391136690">+7 939 113 66 90</a>
          </div>
        </div>

        <Social class="footer__soc" />
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped>
.footer_bx {
  margin-bottom: 40px;
}

.footer {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.footer a {
  font-family: var(--fontFamily-RFDewi);
  font-weight: 700;
}

.footer__email {
  font-size: 38px;
  line-height: 42px;
  display: inline-block;
  margin-bottom: 36px;
}

.footer__copy {
  display: flex;
  column-gap: 52px;
}

.footer .footer__desc {
  font-family: var(--fontFamily-NeueMachina);
  font-weight: 300;
  line-height: 21px;
  color: var(--colorTextOpacity06);
}

.footer__copy .footer__desc {
  letter-spacing: 0.2px;
}

/*  */
.footer__right {
  display: flex;
  column-gap: 42px;
  padding-top: 10px;
}

.footer__line .footer__desc {
  margin-bottom: 12px;
}

.footer__line a {
  font-size: 22px;
  line-height: 24px;
}

.footer__soc {
  display: none;
}

/* =========== Медиа запросы */
@media (max-width: 992px) {
  .footer__left {
    width: 100%;
  }

  .footer__email {
    margin-bottom: 32px;
  }

  .footer__copy {
    justify-content: space-between;
    margin-top: 52px;
  }

  .footer__line a {
    font-size: 20px;
    line-height: 22px;
  }

  .footer__right {
    column-gap: 52px;
    padding-top: 0;
  }

  /*  */
  .footer__soc {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
  }
}

@media (max-width: 700px) {
  .footer__left {
    text-align: center;
  }

  .footer__email {
    font-size: 24px;
    line-height: 26px;
    margin-bottom: 28px;
  }

  .footer__right {
    flex-direction: column;
    text-align: center;
    row-gap: 24px;
  }

  .footer__copy {
    margin-top: 98px;
  }

  .footer__soc {
    top: 216px;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
  }
}

@media (max-width: 576px) {
  .footer_bx {
    margin-bottom: 30px;
  }

  .footer__line .footer__desc {
    font-size: 15px;
  }

  .footer__copy {
    flex-direction: column;
    row-gap: 14px;
  }

  .footer__copy .footer__desc {
    font-size: 14px;
    line-height: 15px;
  }
}
</style>
