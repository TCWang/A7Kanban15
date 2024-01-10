<script setup>
import houses from "@/data/houses.json";

const housesOrganized = {
  newSorted: [...houses]
    .filter((house) => house.選擇2 === "Y")
    .sort((a, b) => a.No - b.No),
};
</script>

<template>
  <div class="">
    <div class="">
      <h3>A7建案 熱銷排行榜 - 2023 Q1-Q4</h3>

      <p>
        資料來源; Facebook A7重劃區大小事 /
        <a
          href="https://www.facebook.com/groups/1951117865015671/permalink/6790404564420286/?mibextid=uJjRxr"
          >李世豪 2024/01/01</a
        >。
      </p>
      <div class="">
        <div class="">
          <MarketRow :isHeader="true" />
          <MarketRow
            v-for="(house, index) in housesOrganized.newSorted"
            :key="house.id"
            :No="house.No"
            :建案="house.建案"
            :AQ1="house.實價登錄數Q1"
            :AQ2="house.實價登錄數Q2"
            :AQ3="house.實價登錄數Q3"
            :AQ4="house.實價登錄數Q4"
            :PQ1="house.實價平均Q1"
            :PQ2="house.實價平均Q2"
            :PQ3="house.實價平均Q3"
            :PQ4="house.實價平均Q4"
            :index="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
