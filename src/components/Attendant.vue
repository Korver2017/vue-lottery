<template>
  <div>
    <h1>Hello Every Attendant!</h1>
    <ul v-for="name in nameList" :key="name">
      <li>{{ name }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['nameList'],
  }
</script>

<style scoped>
  
</style>