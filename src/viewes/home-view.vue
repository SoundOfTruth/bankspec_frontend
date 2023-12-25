<template>
  <div class="menu-container">
    <router-link :to="'/'">В отделении (наличные)</router-link>
    <router-link :to="'vallets'">В отделении (безналичные)</router-link>
    <!-- <router-link :to="'/'">Foo</router-link>
    <router-link :to="'/user/0'">Account</router-link> -->
  </div>
</template>

<style lang="scss" scoped>
.menu-container {
  width: 100%;
  margin: 0.75rem;
  display: flex;
  justify-content: space-around;
  :hover {
    transition: 300ms ease;
    color: var(--gray-600);
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
}
</style>
