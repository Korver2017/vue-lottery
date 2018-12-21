<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <app-header></app-header>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
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
import { eventBus } from "./main";
import appHeader from "./components/Header";
// import appHome from "./components/Home";
// import appAttendants from "./components/Attendants";
// import appLottery from "./components/Lottery";
// import appAddAttendant from "./components/AddAttendant";

export default {
  name: "App",
  components: {
    appHeader
    // appHome,
    // appAttendants,
    // appLottery,
    // appAddAttendant
  },
  created() {
    // defaultAttendants.forEach(item => {
    //   this.$set(this.attendants.attendantDetail, item.name, item.department);
    // });
    // console.log(this.attendants.attendantDetail);
    eventBus.getData();
    console.log("kk");
    
  },
  methods: {
    // getData() {
    //   this.$http
    //     .get("https://vue-lottery.firebaseio.com/attendantList.json")
    //     .then(res => {
    //       console.log(Object.values(res.data));
    //       var attendantsData = Object.values(res.data);
    //       eventBus.$emit("catchData", attendantsData);
    //       // attendantsData.forEach(data => {
    //       //   console.log(data.name);
    //       //   this.$set(this.attendants.attendantDetail, data.name, data.department);
    //       // });
    //     })
    //     .catch(err => console.log(err));
    // }
  }
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";

#app {
  text-align: center;
}
</style>
