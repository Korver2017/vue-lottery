<template>
  <div class="w-100">
    <h1>Hello Attendants!</h1>

    <ul class="text-left">
      <h2>Front-End Engineer</h2>
      <li v-for="member in frontEnd" :key="member">
        {{ member }}
      </li>
    </ul>

    <ul class="text-left">
      <h2>UI/UX Designer</h2>
      <li v-for="member in designer" :key="member">
        {{ member }}
      </li>
    </ul>

    <ul class="text-left">
      <h2>Back-End Engineer</h2>
      <li v-for="member in backEnd" :key="member">
        {{ member }}
      </li>
    </ul>

    <ul class="d-flex flex-direction-row flex-wrap mt-5">
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
  computed: {
    frontEnd() {
      var wholeList = this.attendants.attendantDetail;

      Object.filter = (obj, predicate) =>
        Object.keys(obj)
          .filter(key => predicate(obj[key]))
          .reduce((res, key) => ((res[key] = obj[key]), res), {});

      var filtered = Object.filter(wholeList, department => department === 'Front-End Engineer');
      console.log(Object.keys(filtered));
      return Object.keys(filtered);
    },
    designer() {
      var wholeList = this.attendants.attendantDetail;

      Object.filter = (obj, predicate) =>
        Object.keys(obj)
          .filter(key => predicate(obj[key]))
          .reduce((res, key) => ((res[key] = obj[key]), res), {});

      var filtered = Object.filter(wholeList, department => department === 'UI/UX Designer');
      console.log(Object.keys(filtered));
      return Object.keys(filtered);
    },
    backEnd() {
      var wholeList = this.attendants.attendantDetail;

      Object.filter = (obj, predicate) =>
        Object.keys(obj)
          .filter(key => predicate(obj[key]))
          .reduce((res, key) => ((res[key] = obj[key]), res), {});

      var filtered = Object.filter(wholeList, department => department === 'Back-End Engineer');
      console.log(Object.keys(filtered));
      return Object.keys(filtered);
    },
  },
  // mounted(){
  created() {
    defaultAttendants.forEach(item => {
      this.$set(this.attendants.attendantDetail, item.name, item.department);
    });
    console.log(this.attendants.attendantDetail);

    eventBus.getData();
    eventBus.$on("catchData", res => {
      res.forEach(data => {
        console.log("after catch");
        this.$set(this.attendants.attendantDetail, data.name, data.department);
      });
    });
  },
  methods: {
    // getData() {
    //   this.$http
    //     .get("https://vue-lottery.firebaseio.com/attendantList.json")
    //     .then(res => {
    //       console.log(Object.values(res.data));
    //       var attendantsData = Object.values(res.data);
    //       attendantsData.forEach(data => {
    //         console.log(data.name);
    //         this.$set(
    //           this.attendants.attendantDetail,
    //           data.name,
    //           data.department
    //         );
    //       });
    //     })
    //     .catch(err => console.log(err));
    // }
  }
};
</script>

<style scoped>

* {
  list-style-type: none;
}

</style>