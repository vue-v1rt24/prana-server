<script setup lang="ts">
import { useIMask } from 'vue-imask';
import { z, type ZodFormattedError } from 'zod';

//
const emit = defineEmits<{
  sendForm: [];
}>();

//
const { el } = useIMask({
  mask: '+{7} (000) 000-00-00',
});

//
const openServices = ref<boolean>(false);

const formData = reactive({
  name: '',
  tel: '',
  select: 'Выберите услугу',
});

//
const formError = ref<ZodFormattedError<typeof formData>>({ _errors: [] });

const User = z.object({
  name: z.string().min(3),
  tel: z.string().length(19),
  select: z.enum(['Дизайн', 'Разработка сайтов', 'Фото/Видео', 'Продвижение']),
});

//
const contactHandler = () => {
  try {
    const resValid = User.safeParse(formData);

    if (!resValid.success) {
      formError.value = resValid.error.format();
    } else {
      formError.value = { _errors: [] };
    }

    if (resValid.success) {
      // console.log(formData);
      emit('sendForm');
    }
  } catch (error) {
    console.log(error);
  }
};

const resetForm = () => {
  formData.name = '';
  formData.tel = '';
  formData.select = 'Выберите услугу';

  openServices.value = false;
  formError.value = { _errors: [] };
};

//
defineExpose({
  resetForm,
});
</script>

<template>
  <div class="contact">
    <div class="contact__title">Свяжитесь с нами</div>

    <div class="contact__desc">
      Оставьте заявку и команда PRANA IT <br />
      свяжется с вами любым удобным способом
    </div>

    <form @submit.prevent="contactHandler" class="contact__form form">
      <div class="form__inputs">
        <input
          class="form__inp"
          :class="{ errorField: formError.name }"
          type="text"
          placeholder="Ваше имя"
          v-model="formData.name"
        />

        <input
          ref="el"
          class="form__inp"
          :class="{ errorField: formError.tel }"
          type="text"
          placeholder="Номер телефона"
          v-model="formData.tel"
        />

        <div :class="['form__select', { open: openServices }]">
          <div
            class="form__select_val form__inp"
            :class="{ errorField: formError.select }"
            @click="openServices = !openServices"
          >
            <span>{{ formData.select }}</span>
            <ImageArrowDown class="arrow_down" />
          </div>

          <div class="form__select_hide_bx">
            <ul class="form__select_hide_val">
              <li
                class="form__select_hide_val_item"
                @click="(formData.select = 'Дизайн'), (openServices = false)"
              >
                Дизайн
              </li>

              <li
                class="form__select_hide_val_item"
                @click="(formData.select = 'Разработка сайтов'), (openServices = false)"
              >
                Разработка сайтов
              </li>

              <li
                class="form__select_hide_val_item"
                @click="(formData.select = 'Фото'), (openServices = false)"
              >
                Фото/Видео
              </li>

              <li
                class="form__select_hide_val_item"
                @click="(formData.select = 'Продвижение'), (openServices = false)"
              >
                Продвижение
              </li>
            </ul>
          </div>
        </div>
      </div>

      <UiButton class="contact__submit" title="Отправить" type="submit" arrow />

      <div class="contact__politica">
        Нажимая кнопку "Отправить" вы соглашаетесь <br />
        с политикой конфиденциальности
      </div>
    </form>
  </div>
</template>

<style lang="css" scoped>
.contact {
  background-color: #030810;
  border-radius: 32px;
  padding: 40px;
}

.contact__title {
  font-size: 32px;
  font-weight: 700;
  line-height: 100%;
  color: white;
  margin-bottom: 20px;
}

.contact__desc {
  font-weight: 300;
  line-height: 130%;
  font-size: 18px;
  color: var(--colorTextOpacity08);
}

/*  */
.contact__form {
  border-top: var(--border_02);
  margin-top: 34px;
}

.form__inputs {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  border-bottom: var(--border_02);
  padding-bottom: 34px;
  margin: 34px 0;
}

.form__inp {
  width: 100%;
  height: 95px;
  font-family: var(--fontFamily-NeueMachina);
  font-size: 18px;
  font-weight: 300;
  line-height: 130%;
  color: var(--colorTextOpacity06);
  background-color: #060e1b;
  border: none;
  border-radius: 18px;
  padding: 36px;
}

.form__inp:focus {
  outline: 2px solid var(--accentColor);
}

.errorField {
  outline: 2px solid #c20000;
}

/*  */
.form__select {
  position: relative;
  z-index: 10;
  cursor: pointer;
}

.form__select_val {
  color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/*  */
.arrow_down {
  fill: white;
  transform: rotateX(0);
  transition: fill 0.3s, transform 0.3s;
}

.form__select.open .arrow_down {
  fill: var(--accentColor);
  transform: rotateX(180deg);
}

/*  */
.form__select_hide_bx {
  position: absolute;
  top: 76px;
  width: 100%;
  height: 0;
  visibility: hidden;
}

.form__select.open .form__select_hide_bx {
  height: 350px;
  visibility: visible;
}

.form__select_hide_val {
  background-color: #060e1b;
  border-radius: 0 0 18px 18px;
  padding: 19px 36px 36px 36px;
}

.form__select_hide_val_item {
  font-size: 18px;
  font-weight: 300;
  line-height: 130%;
  color: white;
  border-bottom: var(--border_01);
  padding: 20px 20px 20px 0;
}

.form__select_hide_val_item:first-child {
  border-top: var(--border_01);
}

/*  */
.contact__submit {
  width: 100%;
  height: 103px;
  font-family: var(--fontFamily-RoadRadio);
  font-weight: 700;
  line-height: 130%;
  font-size: 24px;
  border-radius: 28px;
}

/*  */
.contact__politica {
  font-weight: 300;
  line-height: 130%;
  text-align: center;
  font-size: 14px;
  color: var(--colorTextOpacity06);
  margin-top: 24px;
}

/* ================ Медиа-запросы */
@media (max-width: 768px) {
  .contact {
    padding: 20px;
  }

  .contact__title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .contact__desc {
    font-size: 14px;
  }

  .contact__form {
    margin-top: 24px;
  }

  .form__inputs {
    row-gap: 16px;
    padding-bottom: 24px;
    margin: 24px 0;
  }

  .form__inp {
    height: 73px;
    font-size: 16px;
    padding: 26px;
  }

  .form__select_hide_bx {
    top: 50px;
  }

  .form__select_hide_val {
    padding: 19px 26px;
  }

  .form__select_hide_val_item {
    font-size: 16px;
    padding: 16px 16px 16px 0;
  }

  .contact__submit {
    height: 79px;
    font-size: 18px;
  }

  .btn_bg_1 .btn__arrow .arrow {
    width: 12px;
    height: 12px;
  }

  .contact__politica {
    font-size: 11px;
    margin-top: 16px;
  }
}

@media (max-width: 576px) {
  .contact {
    height: 100%;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
