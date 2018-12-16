<template>
  <div>
    <h1>Hello Attendants!</h1>
    <ul class="d-flex p-0">
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
      attendants: ["Alex", "Ben", "Korver", 'aaa', 'bbb', 'ccc']
    };
  }
};
</script>

<style scoped>
</style>