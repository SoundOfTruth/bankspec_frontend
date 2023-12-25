<template>
  <div class="main-container width-100">
    <div class="central-container">
      <h1>
        <forbidden-sign class="sign" />
        <div>Page not found</div>
      </h1>
      <hr />
      <router-link :to="'/'"> <p>Return to home</p> </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import ForbiddenSign from "../components/svg/forbidden-sign.vue";
</script>

<style scoped lang="scss">
h1 {
  display: flex;
  align-items: center;
}

.sign {
  width: 48px;
  height: 48px;
  margin: 0.75rem;
}

//.container {
//  visibility: hidden;
//}

//.main-container div {
//  z-index: 2;
//}
</style>
