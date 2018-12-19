<template>
  <div>
    <h1>Hello Attendants!</h1>
    <ul>
      <!-- <li v-for="(value, key) in attObj" :key="key">{{ value }}</li> -->
      <!-- <slot>
        <app-attendant :attObj.sync="attObj" :nameList="attendants" :imgs="imgs"></app-attendant>
      </slot>-->
      <li ref="list" class="d-flex avatar col-3" v-for="(value, key) in attendantList" :key="key">
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
      // attendants: ["Alex", "Ben", "Korver", 'aaa', 'bbb', 'ccc'],
      attendants: {},
      imgs: [],
    };
  },
  computed: {
    attendantList() {
      return this.attendants; 
    }
  },
  created() {
    this.callAPI();
    console.log('kk');
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
          // eventBus.$emit('passImage', this.imgs);
        })
        // .then((res) => {

        //   console.log(res);
        // })
        .catch(err => {
          console.log(err);
        });
    }
    // eventBus.$emit('attendantsLoaded', true);
  }
  // watch: {
  //   attObj: function(){
  //     console.log(attObj);
  //   }
  // }
};
</script>

<style scoped>
</style>