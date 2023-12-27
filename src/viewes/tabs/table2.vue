<template>
  <div>
    <prices-table :prices="banksPrice"></prices-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PricesTable from "../../components/elements/prices-table.vue";
import { getPrice } from "../../api/office_noncash_api";

const banksPrice = ref([]);

const loadPrice = async () => {
  banksPrice.value = await getPrice();
};

loadPrice();
</script>

<style lang="scss" scoped>
.b {
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  .btn {
    max-width: 200px;
  }
}
</style>
