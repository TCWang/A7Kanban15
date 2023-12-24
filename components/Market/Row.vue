<template>
  <div class="row" v-if="isHeader">
    <h4 class="link item-long">建案</h4>
    <h4 class="header item">Q1成交</h4>
    <h4 class="header item">Q2成交</h4>
    <h4 class="header item">Q3成交</h4>
    <h4 class="header item">Q1均價</h4>
    <h4 class="header item">Q2均價</h4>
    <h4 class="header item">Q3均價</h4>
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
    <a :href="`/market/${建案}`" class="link item-long">{{ 建案 }}</a>
    <p class="header item">{{ AQ1 }}</p>
    <p class="header item">{{ AQ2 }}</p>
    <p class="header item">{{ AQ3 }}</p>
    <p class="header item">{{ PQ1 }}</p>
    <p class="header item">{{ PQ2 }}</p>
    <p class="header item">{{ PQ3 }}</p>
  </div>
</template>

<script setup lang="ts">
interface RowProps {
  建案?: string;
  AQ1?: number;
  AQ2?: number;
  AQ3?: number;
  AQ4: number;
  PQ1: number;
  PQ2: number;
  PQ3: number;
  PQ4: number;
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

  width: 15%;
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
