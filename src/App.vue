<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <app-header></app-header>
      </div>
    </div>
      <div class="container">
        <div class="row">
          <router-view></router-view>
        </div>
      </div>
  </div>

  <!-- <div class="container">
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
      <div class="row">
        <div class="col">
          <app-addAttendant></app-addAttendant>
        </div>
      </div>
  </div>-->
</template>

<script>
import appHeader from "./components/Header";
import appHome from "./components/Home";
import appAttendants from "./components/Attendants";
import appLottery from "./components/Lottery";
import appAddAttendant from "./components/AddAttendant";

export default {
  name: "App",
  components: {
    appHeader,
    appHome,
    appAttendants,
    appLottery,
    appAddAttendant
  }
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";

#app {
  text-align: center;
}


</style>
