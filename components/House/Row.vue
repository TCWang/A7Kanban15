<template>
  <div class="row" v-if="isHeader">
    <h4 class="link item-long">建案</h4>
    <h4 class="header item-long">開價</h4>

    <h4 class="header item-long">登錄筆數</h4>
    <h4 class="header item">一年均價</h4>
    <h4 class="header item">最高實價</h4>
    <h4 class="header item">最低實價</h4>
  </div>
  <div
    v-else
    class="row"
    :style="
      index % 2 === 0
        ? { background: 'rgba(128,128,128,0.15)' }
        : { background: 'rgba(255,255,255,0.1)' }
    "
  >
    <a :href="`/houses/${建案}`" class="link item-long">{{ 建案 }}</a>
    <p class="header item-long">{{ 每坪開價 }}</p>

    <p class="header item-long">{{ 登錄筆數 }}</p>
    <p class="header item">{{ 一年成交均價 }}</p>
    <p class="header item">{{ 最高實價 }}</p>
    <p class="header item">{{ 最低實價 }}</p>
  </div>
</template>

<script setup lang="ts">
interface RowProps {
  每坪開價?: string;
  建案?: string;
  一年成交均價?: string;
  登錄筆數?: string;
  最高實價?: string;
  最低實價?: string;
  index: number;
  isHeader?: boolean;
}

const props = defineProps<RowProps>();
</script>

<style scoped>
.row {
  border-top: 1px solid rgba(128, 128, 128, 0.336);
  display: flex;
  align-items: center;
}
.header {
  margin: 0;
  margin-right: 0rem;
  padding: 0.1rem 0.1rem;
  font-weight: 400;
  /* width: auto; */
}
.item {
  color: black;
  width: 8%;
  margin-right: 1rem;
}
.item-long {
  text-decoration: none;

  width: 18%;
  font-weight: 500;
}
.link {
  margin: 0;
  margin-right: 1rem;
  padding: 0.1rem 0.1rem;
  font-weight: 400;
  color: rgb(10, 31, 148);
}
</style>
