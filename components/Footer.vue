<script setup lang="ts">
import type { UiModal, UiModalsStartProject } from '#build/components';

//
const props = withDefaults(
  defineProps<{
    mode?: 'white' | 'dark';
  }>(),
  {
    mode: 'dark',
  },
);

//
const route = useRoute();

//
const footerEmail = ref<HTMLDivElement | null>(null);
const footerRight = ref<HTMLDivElement | null>(null);

const modal = ref<InstanceType<typeof UiModal>>();
const modalSuccess = ref<InstanceType<typeof UiModal>>();
const startForm = ref<InstanceType<typeof UiModalsStartProject>>();

//
type TypeMode = {
  mode: 'white' | 'dark';
  link: boolean;
};

const modalSuccessMode = computed<TypeMode>(() => {
  let mode: 'white' | 'dark' = 'dark';
  let link = false;

  if (route.name === 'brief') {
    mode = 'white';
    link = true;
  }

  return {
    mode,
    link,
  };
});

//
const openModal = () => {
  modal.value?.openModal();
};

const closeModalEvent = () => {
  startForm.value?.resetForm();
};

const sendForm = () => {
  modal.value?.closeModal();
  modalSuccess.value?.openModal();
};

//
onMounted(() => {
  if (window.matchMedia('(max-width: 992px)').matches) {
    if (footerEmail.value && footerRight.value) {
      footerEmail.value?.after(footerRight.value);
    }
  }
});
</script>

<template>
  <footer :class="['footer_bx', { white_mode: mode === 'white' }]">
    <div class="container">
      <div class="footer">
        <div class="footer__left">
          <a class="footer__email link" ref="footerEmail" href="mailto:info@pranait.ru">
            info@pranait.ru
          </a>

          <div class="footer__copy">
            <p class="footer__desc">LLC PRANA IT</p>
            <NuxtLink class="footer__desc" to="/policy">Политика конфиденциальности</NuxtLink>
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

        <div class="footer__arda">
          <a href="https://arda.digital" target="_blank">
            <img src="/img/arda.svg" alt="" />
          </a>
        </div>

        <Social class="footer__soc" />
      </div>
    </div>

    <button @click="openModal" class="open_modal" hidden>Открыть</button>

    <Teleport to="body">
      <!-- Модальное окно -->
      <UiModal ref="modal" max-width="540px" @close-modal-event="closeModalEvent">
        <UiModalsStartProject ref="startForm" @send-form="sendForm" />
      </UiModal>

      <!-- Модальное окно после успешной отправки -->
      <UiModal ref="modalSuccess" max-width="614px">
        <UiModalsOrderSuccess :mode="modalSuccessMode.mode" :link="modalSuccessMode.link" />
      </UiModal>
    </Teleport>
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

.white_mode .footer__left .footer__desc {
  color: var(--colorBlackTextOpacity06);
}

.white_mode .footer__right .footer__desc {
  color: var(--colorBlackTextOpacity08);
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

/*  */
.footer__arda {
  padding-top: 18px;
}

/* =========== Медиа запросы */
@media (max-width: 1200px) {
  .footer__left {
    width: 100%;
  }

  .footer__email {
    margin-bottom: 74px;
  }

  .footer__copy {
    margin-top: 52px;
  }

  .footer__line a {
    font-size: 20px;
    line-height: 22px;
  }

  .footer__right {
    position: absolute;
    top: 66px;
    column-gap: 52px;
    padding-top: 0;
  }

  .footer__arda {
    padding-top: 143px;
  }

  /*  */
  .footer__soc {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
  }
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
  }

  .footer__left {
    text-align: center;
  }

  .footer__email {
    font-size: 24px;
    line-height: 26px;
    margin-bottom: 28px;
  }

  .footer__right {
    position: static;
    flex-direction: column;
    text-align: center;
    row-gap: 24px;
  }

  .footer__copy {
    flex-direction: column;
    row-gap: 20px;
    margin-top: 98px;
  }

  .footer__arda {
    text-align: center;
    padding-top: 30px;
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
    row-gap: 14px;
  }

  .footer__copy .footer__desc {
    font-size: 14px;
    line-height: 15px;
  }
}
</style>
