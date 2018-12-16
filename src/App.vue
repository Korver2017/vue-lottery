<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <img src="./assets/logo.png">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <app-attendants></app-attendants>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <app-lottery></app-lottery>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appAttendants from "./components/Attendants";
import appLottery from "./components/Lottery";

export default {
  name: "App",
  components: {
    appAttendants,
    appLottery,
  }
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";

#app {
  text-align: center;
}
</style>
