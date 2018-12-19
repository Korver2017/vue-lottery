<template>
  <div class="w-100">
    <h1>Hello Attendants!</h1>
    <ul class="d-flex flex-direction-row flex-wrap">
      <!-- <li v-for="(value, key) in attObj" :key="key">{{ value }}</li> -->
      <!-- <slot>
        <app-attendant :attObj.sync="attObj" :nameList="attendants" :imgs="imgs"></app-attendant>
      </slot>-->
      <li ref="list" class="avatar col-3" v-for="(value, key) in attendants" :key="key">
        {{ key }}
        <img :src="value" alt>
      </li>
    </ul>
  </div>
</template>

<script>
import appAttendant from "./Attendant";
import appLottery from "./Lottery";
import { eventBus } from "../main";

export default {
  components: {
    appAttendant,
    appLottery
  },
  data() {
    return {
      attendants: {},
    }
  },
  created() {
    this.callAPI();
  },
  methods: {
    callAPI() {
      let vm = this;
      fetch("https://randomuser.me/api/?results=500&gender=female", {})
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(jsonData => {
          var res = jsonData.results;
          for (let i = 0; i < 20; i++) {
            vm.attendants[`${res[i].name.first} ${res[i].name.last}`] =
              res[i].picture.large;
          }
          console.log(vm.attendants);
          vm.$set(this.attendants, vm.attendants);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
</style>