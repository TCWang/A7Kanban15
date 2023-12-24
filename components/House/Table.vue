<script setup>
import houses from "@/data/houses.json";

const housesOrganized = {
  newSorted: [...houses]
    .filter((house) => house.選擇 === "Y")
    .sort((a, b) => a.No - b.No),
};
</script>

<template>
  <div class="">
    <div class="">
      <h3>新建案列表</h3>
      <p>
        資料更新: 2023/10/25, 本網頁資訊非即時更新資料。請點擊
        <mark>建案連接</mark> 查詢即時資訊。
      </p>
      <div class="">
        <div class="">
          <HouseRow :isHeader="true" />
          <HouseRow
            v-for="(house, index) in housesOrganized.newSorted"
            :key="house.id"
            :建案="house.建案"
            :每坪開價="house.每坪開價"
            :一年成交均價="house.一年成交均價"
            :登錄筆數="house.登錄筆數"
            :最高實價="house.最高實價"
            :最低實價="house.最低實價"
            :index="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
