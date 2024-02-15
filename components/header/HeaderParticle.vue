<script setup lang="ts">
import { particle } from '~/assets/libs/particle/particle';

const viewport = useViewport();

//
const particleRef = ref();
const decisionsSection = ref();
const isInit = ref(false);
const elem = ref<HTMLElement | null>(null);

//
const openModal = () => {
  if (!isInit.value) {
    isInit.value = true;
    elem.value = document.querySelector<HTMLButtonElement>('.open_modal');
  }

  if (elem.value) {
    elem.value.click();
  }
};

onMounted(() => {
  particle(particleRef.value, decisionsSection.value);
});
</script>

<template>
  <header class="header_bx">
    <div class="container">
      <div class="header">
        <!--  -->
        <div class="logo">
          <img src="/img/logo.svg" alt="" />
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

          <!--  -->
          <UiButtonTransparent
            title="Начать проект"
            transparent
            class="UiButtonTransparent"
            @click="$router.push('/brief')"
          />
        </div>
      </div>
    </div>
  </header>

  <!-- Экран с частицами -->
  <section class="decisions_sec" ref="decisionsSection">
    <div class="container">
      <div class="decisions">
        <h1 class="decisions__title">
          Энергичные <br />
          решения для <br />
          <span>вашего бизнеса</span>
        </h1>

        <p class="decisions__desc">
          Комплексная разработка визуального <br />
          имиджа и онлайн-присутствия компаний
        </p>

        <UiButton
          width="398px"
          height="98px"
          title="Связаться с нами"
          class="header__uiButton"
          @click="openModal"
        />
      </div>

      <canvas class="particle" ref="particleRef"></canvas>

      <ImageEllipseHeader />
    </div>
  </section>
</template>

<style lang="css" scoped>
.header_bx {
  position: absolute;
  z-index: 100;
  width: 100%;
  padding: 40px 0;
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
.decisions_sec {
  position: relative;
  height: 835px;
  margin-bottom: 125px;
  overflow: hidden;
}

.decisions {
  position: relative;
  z-index: 2;
  padding-top: 220px;
  user-select: none;
}

.decisions__title {
  font-family: var(--fontFamily-RFDewi);
  font-size: 68px;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: 1.36px;
  color: white;
}

.decisions__title span {
  background-image: var(--linearGradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/*  */
.decisions__desc {
  font-family: var(--fontFamily-NeueMachina);
  font-size: 26px;
  font-weight: 300;
  line-height: 130%;
  color: var(--colorTextOpacity08);
  margin-top: 42px;
}

/*  */
.particle {
  position: absolute;
  inset: 0;
  z-index: 1;
}

/*  */
.header__tel_but {
  display: flex;
  align-items: center;
  column-gap: 62px;
}

/*  */
.UiButtonTransparent {
  width: 224px;
  height: 60px;
  font-size: 14px;
  border-radius: 16px;
}

/*  */
.header__uiButton {
  width: 398px;
  height: 98px;
  font-size: 20px;
  border-radius: 28px;
  margin-top: 62px;
}

/* ================ Медиа-запросы */
@media (max-width: 992px) {
  .decisions__title {
    font-size: 56px;
    letter-spacing: 1.12px;
  }

  .decisions_sec {
    margin-bottom: 40px;
  }
}

@media (max-width: 768px) {
  .header_bx {
    padding: 37px 0;
  }

  .logo {
    width: 210px;
  }

  .UiButtonTransparent {
    width: 210px;
    font-size: 13px;
  }

  /*  */
  .decisions_sec {
    height: 814px;
  }

  .decisions {
    padding-top: 220px;
  }

  .decisions__desc {
    font-size: 22px;
    margin-top: 28px;
  }

  .ellipse_header {
    top: -70px;
    left: -241px;
    width: 965px;
  }
}

@media (max-width: 700px) {
  .decisions__title {
    font-size: 44px;
    letter-spacing: 0.56px;
  }
}

@media (max-width: 576px) {
  .header_bx {
    padding: 20px 0;
  }

  .logo {
    width: 170px;
  }

  /*  */
  .UiButtonTransparent {
    width: 46px;
    height: 46px;
    border-radius: 12px;
  }

  .UiButtonTransparent :deep(.btn_bg_1__title) {
    display: none;
  }

  /*  */
  .decisions_sec {
    height: 457px;
    margin-bottom: 120px;
  }

  .decisions {
    padding-top: 120px;
  }

  .decisions__title {
    font-size: 28px;
    text-align: center;
  }

  .decisions__desc {
    font-size: 15px;
    text-align: center;
    margin-top: 18px;
  }

  .ellipse_header {
    top: -217px;
    left: 50%;
    transform: translateX(-50%);
    width: 340px;
  }

  .header__uiButton {
    width: 100%;
    height: 85px;
    font-size: 18px;
    margin-top: 42px;
  }
}

@media (max-width: 480px) {
  .decisions_sec {
    margin-bottom: 80px;
  }
}
</style>
