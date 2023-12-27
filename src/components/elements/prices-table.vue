<template>
  <div class="st">
    <p class="cg">Название банка</p>
    <p class="cg">
      Покупка USD
      <arrows-price @click="pricesSort('USDBuy')" />
    </p>
    <p class="cg">
      Продажа USD
      <arrows-price @click="pricesSort('USDSell')" />
    </p>
  </div>
  <div v-for="(el, idx) in props.prices" :key="idx" class="st">
    <p>{{ el.BankName }}</p>
    <p>{{ el.USDBuy.toFixed(2) }}</p>
    <p>{{ el.USDSell.toFixed(2) }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import plusSvg from "../../components/svg/plus-svg.vue";
import ArrowsPrice from "../svg/arrows-price.vue";

const props = defineProps(["prices"]);
let isFirst = ref(true);

const pricesSort = (val: string) => {
  if (isFirst.value) {
    isFirst.value = false;
    return props.prices.sort((a, b) => a[val] - b[val]);
  }
  isFirst.value = true;
  return props.prices.sort((z, x) => x[val] - z[val]);
};
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
