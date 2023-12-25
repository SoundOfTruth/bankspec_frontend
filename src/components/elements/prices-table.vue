<template>
  <div class="st">
    <p class="cg">Название банка</p>
    <p class="cg">Продажа USD</p>
    <p class="cg">Покупка USD</p>
  </div>
  <div v-for="(el, idx) in props.prices" :key="idx" class="st">
    <p>{{ el.BankName }}</p>
    <p>{{ el.USDBuy.toFixed(2) }}</p>
    <p>{{ el.USDSell.toFixed(2) }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["prices"]);
</script>

<style lang="scss" scoped>
.st {
  display: flex;
  justify-content: space-evenly;
  p {
    @media screen and (max-width: 450px) {
      width: 50px;
      font-size: smaller;
    }
    overflow: hidden;
    text-overflow: ellipsis;
    width: 500px;
  }
}

.cg {
  color: var(--green-700);
}
</style>
