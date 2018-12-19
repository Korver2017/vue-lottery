<template>
  <div class="w-100">
    <h1>Hello Attendants!</h1>
    <ul class="d-flex flex-direction-row flex-wrap">
      <li class="avatar col-3" v-for="(value, key) in attendants.name" :key="key">
        {{ key }} | {{ value }}
      </li>
      <!-- <li ref="list" class="avatar col-3" v-for="(value, key) in attendants" :key="key">
        {{ key }}
        <img :src="value" alt>
      </li> -->
    </ul>
  </div>
</template>

<script>
import appAttendant from "./Attendant";
import appLottery from "./Lottery";
import { eventBus } from "../main";
import { defaultAttendants } from "../data";

export default {
  components: {
    appAttendant,
    appLottery
  },
  data() {
    return {
      attendants: {
        departments: ['Front-End Developer', 'UI/UX Designer'],
        name: {},
      },
    }
  },
  created() {
    defaultAttendants.forEach(item => {
      this.$set(this.attendants.name, item.name, item.department);
    });
    console.log(this.attendants.name);
  },
  methods: {
    // callAPI() {
    //   let vm = this;
    //   fetch("https://randomuser.me/api/?results=500&gender=female", {})
    //     .then(response => {
    //       console.log(response);
    //       return response.json();
    //     })
    //     .then(jsonData => {
    //       var res = jsonData.results;
    //       for (let i = 0; i < 20; i++) {
    //         vm.attendants[`${res[i].name.first} ${res[i].name.last}`] =
    //           res[i].picture.large;
    //       }
    //       console.log(vm.attendants);
    //       vm.$set(this.attendants, vm.attendants);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
};
</script>

<style scoped>
</style>