<template>
  <div>
    <h1>Hello Every Attendant!</h1>
    <ul class="list-group list-group-flush" v-for="name in nameList" :key="name">
      <li class="list-group-item">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["nameList"]
};
</script>

<style scoped>
</style>