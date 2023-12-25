<template>
  <div>
    <prices-table :prices="banksPrice"></prices-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PricesTable from "../../components/elements/prices-table.vue";
import { getPrice } from "../../api/office_cash_api";

const banksPrice = ref([]);

const loadPrice = async () => {
  banksPrice.value = await getPrice();
};

loadPrice();
</script>
