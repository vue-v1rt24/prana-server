<script setup lang="ts">
import type { UiModal, UiModalsStartProject } from '#build/components';

const viewport = useViewport();
const route = useRoute()

//
const modal = ref<InstanceType<typeof UiModal>>();
const startForm = ref<InstanceType<typeof UiModalsStartProject>>();

//
const openModal = () => {
  modal.value?.openModal();
};

const closeModalEvent = () => {
  startForm.value?.resetForm();
};

const sendForm = () => {
  modal.value?.closeModal();
};
</script>

<template>
  <header class="header_bx">
    <div class="container">
      <div class="header">
        <!--  -->
        <div class="logo">
          <NuxtLink v-if="route.name !== '/'" to="/">
            <img src="/img/logo.svg" alt="" />
          </NuxtLink>

          <img v-else src="/img/logo.svg" alt="" />
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
            @click="openModal"
          />
        </div>
      </div>
    </div>
  </header>

  <!-- Модальное окно -->
  <Teleport to="body">
    <UiModal ref="modal" max-width="540px" @close-modal-event="closeModalEvent">
      <UiModalsStartProject ref="startForm" @send-form="sendForm" />
    </UiModal>
  </Teleport>
</template>

<style lang="css" scoped>
.header_bx {
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

/* ================ Медиа-запросы */
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
}

@media (max-width: 576px) {
  .header_bx {
    padding: 20px 0;
  }

  .header {
    justify-content: center;
  }

  .logo {
    width: 170px;
  }

  .UiButtonTransparent {
    display: none;
  }
}
</style>
