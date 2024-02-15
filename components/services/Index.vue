<script setup lang="ts"></script>

<template>
  <section class="services_bx">
    <div class="container">
      <div class="services">
        <div class="cart">
          <div class="cart__img_bx">
            <img class="cart__ellipse" src="/img/services/service-cart-ellipse.svg" alt="" />

            <picture>
              <source media="(max-width: 768px)" srcset="/img/services/service-1-768.png" />
              <img class="cart__img" loading="lazy" src="/img/services/service-1.png" alt="" />
            </picture>
          </div>

          <div class="cart__text">
            <h2 class="cart_title">Разработка сайтов</h2>
            <p class="cart__desc">Современные и функциональные сайты под разные задачи бизнеса</p>

            <UiButtonTransparent
              tag="link"
              link="https://prana-it.ru/landing"
              title="Перейти"
              class="cart__btn"
            />
          </div>
        </div>

        <!--  -->
        <div class="cart">
          <div class="cart__img_bx">
            <img class="cart__ellipse" src="/img/services/service-cart-ellipse.svg" alt="" />

            <picture>
              <source media="(max-width: 768px)" srcset="/img/services/service-2-768.png" />
              <img class="cart__img" loading="lazy" src="/img/services/service-2.png" alt="" />
            </picture>
          </div>

          <div class="cart__text">
            <h2 class="cart_title">Брендинг</h2>
            <p class="cart__desc">Привлекательный визуальный образ для вашей компании или бренда</p>

            <UiButtonTransparent
              tag="link"
              link="https://prana-it.ru/branding"
              title="Перейти"
              class="cart__btn"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.services_bx {
  margin-bottom: 140px;
}

.services {
  display: flex;
  gap: 117px 40px;
}

/*  */
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
  margin-top: -86px;
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
@media (max-width: 1199px) {
  .services {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .cart__img_bx {
    height: auto;
  }

  .cart {
    width: 100%;
  }

  .cart__img {
    margin-top: -85px;
  }
}

@media (max-width: 765px) {
  .cart {
    width: 500px;
  }

  .cart__img {
    margin-top: -62px;
  }
}

@media (max-width: 700px) {
  .services_bx {
    margin-bottom: 62px;
  }
}

@media (max-width: 576px) {
  .services {
    gap: 90px 40px;
  }

  .cart {
    width: 425px;
    border-radius: 28px;
  }

  .cart__ellipse {
    top: -180px;
  }

  .cart__img {
    margin-top: -52px;
  }

  .cart__text {
    padding: 20px 24px 24px 24px;
  }

  .cart_title {
    font-size: 20px;
    margin-bottom: 16px;
  }

  .cart__desc {
    font-size: 16px;
    margin-bottom: 24px;
  }

  .cart__btn {
    height: 76px;
    font-size: 20px;
    border-radius: 24px;
  }

  .cart__btn :deep(.arrow) {
    width: 12px;
    height: 12px;
  }
}

@media (max-width: 480px) {
  .services {
    gap: 70px 40px;
  }

  .cart {
    width: 320px;
  }

  .cart__desc {
    padding-right: 25px;
  }

  .cart__ellipse {
    top: -134px;
  }

  .cart__img {
    margin-top: -40px;
  }
}
</style>
