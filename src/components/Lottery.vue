<template>
  <div>
    <button class="btn btn-outline-danger" @click="lottery">Lottery!</button>
  </div>
</template>

<script>
  import { eventBus } from "../main";

  export default {
    data() {
      return {
        value: true,
      }
    },
    methods: {
      lottery() {
        console.log('Lottery!');
        eventBus.$emit('changeValue', this.value);
      }
    },
  }
</script>

<style scoped>
  
</style>