<template>
  <div>
    <h1>Hello Attendants!</h1>
    <ul class="list-group list-group-flush">
      <slot>
        <app-attendant :nameList="attendants"></app-attendant>
      </slot>
    </ul>
  </div>
</template>

<script>
import appAttendant from "./Attendant";

export default {
  components: {
    appAttendant
  },
  data() {
    return {
      attendants: ["Alex", "Ben", "Korver"]
    };
  }
};
</script>

<style scoped>
</style>