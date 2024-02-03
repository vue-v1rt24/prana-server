<script setup lang="ts"></script>

<template>
  <ul class="soc">
    <li class="soc__item">
      <a class="soc__item_link" href="https://vk.com/prana_it" target="_blank" rel="noopener">
        <ImageSocVk />
      </a>
    </li>

    <li class="soc__item">
      <a class="soc__item_link" href="https://t.me/pranainfo" target="_blank" rel="noopener">
        <ImageSocTelegram />
      </a>
    </li>

    <li class="soc__item">
      <a class="soc__item_link" href="https://wa.me/79383069990" target="_blank" rel="noopener">
        <ImageSocWhatsapp />
      </a>
    </li>
  </ul>
</template>

<style lang="css" scoped>
.soc {
  display: flex;
  align-items: center;
  column-gap: 12px;
}

.soc__item_link svg {
  border-radius: 8px;
  transition: 0.3s;
}

/* =========== Медиа запросы */
@media (hover: hover) {
  .soc__item_link svg:hover {
    opacity: 0.5;
  }
}

@media (hover: none) {
  .soc__item_link svg:active {
    opacity: 0.5;
  }
}

@media (max-width: 576px) {
  .soc[data-v-b085e6e7] {
    column-gap: 14px;
  }

  .soc__item_link svg {
    width: 40px;
    height: 40px;
  }
}
</style>
