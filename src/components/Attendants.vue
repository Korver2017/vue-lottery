<template>
  <div class="w-100">
    <h1>Hello Attendants!</h1>
    <ul class="d-flex flex-direction-row flex-wrap">
      <li
        class="avatar col-3"
        v-for="(value, key) in attendants.attendantDetail"
        :key="key"
      >{{ key }} | {{ value }}</li>
      <!-- <li ref="list" class="avatar col-3" v-for="(value, key) in attendants" :key="key">
        {{ key }}
        <img :src="value" alt>
      </li>-->
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
        attendantDetail: {}
      }
    };
  },
  mounted() {
    defaultAttendants.forEach(item => {
      this.$set(this.attendants.attendantDetail, item.name, item.department);
    });
    console.log(this.attendants.attendantDetail);
    eventBus
      .$on("catchData", res => {
        res.forEach(data => {
          console.log(data.name);
          this.$set(
            this.attendants.attendantDetail,
            data.name,
            data.department
          );
        });
      });
  },
  methods: {
    getData() {
      this.$http
        .get("https://vue-lottery.firebaseio.com/attendantList.json")
        .then(res => {
          console.log(Object.values(res.data));
          var attendantsData = Object.values(res.data);
          attendantsData.forEach(data => {
            console.log(data.name);
            this.$set(
              this.attendants.attendantDetail,
              data.name,
              data.department
            );
          });
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
</style>