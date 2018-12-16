<template>
  <div>
    <h1>Hello Attendants!</h1>
    <app-attendant :nameList="attendants"></app-attendant>
  </div>
</template>

<script>
  import appAttendant from "./Attendant";

  export default {
    components: {
      appAttendant,
    },
    data() {
      return {
        attendants: ['Alex', 'Ben', 'Korver'],
      }
    },
  }
</script>

<style scoped>
  
</style>