<template>
  <div>
    <h1>Hello Attendants!</h1>
    <ul>
      <li v-for="(value, key) in attObj" :key="key">
        {{ value }}
      </li>
      <slot>
        <app-attendant :attObj.sync="attObj" :nameList="attendants" :imgs="imgs" ></app-attendant>
      </slot>
    </ul>
  </div>
</template>

<script>
import appAttendant from "./Attendant";
import { eventBus } from "../main";

export default {
  components: {
    appAttendant
  },
  data() {
    return {
      // attendants: ["Alex", "Ben", "Korver", 'aaa', 'bbb', 'ccc'],
      attendants: [],
      imgs: [],
      attObj: {},
    };
  },
  created(){
    this.callAPI();
  },
  methods: {
    callAPI(){
      let vm = this;
      fetch('https://randomuser.me/api/?results=500&gender=female', {})
      .then((response) => {
        console.log(response);
        return response.json();
      }).then((jsonData) => {
        var res = jsonData.results;
        for(let i = 0; i < 20; i ++){
          vm.attObj[`${res[i].name.first} ${res[i].name.last}`] = res[i].picture.large;

          // this.attendants.push(`${res[i].name.first} ${res[i].name.last}`);
          // this.imgs.push(res[i].picture.medium);
        }
        console.log(vm.attObj);
        // eventBus.$emit('passImage', this.imgs);
      }).then(() => {
        eventBus.$emit('updateData', vm.attObj);
      }).catch((err) => {
        console.log(err);
      });
    }
    // eventBus.$emit('attendantsLoaded', true);
  },
  // watch: {
  //   attObj: function(){
  //     console.log(attObj);
  //   }
  // }
};
</script>

<style scoped>
</style>