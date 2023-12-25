<template>
  <main>
    <div class="container">
      <router-view />
      <hr />
      <div class="width-100">
        <router-view name="tabs" />
      </div>
    </div>
  </main>
</template>
