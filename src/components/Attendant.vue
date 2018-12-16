<template>
  <div>
    <h1>Hello Every Attendant!</h1>
    <li ref="list" v-for="name in nameList" :key="name" class="list-group-item">{{ name }}</li>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: ["nameList"],
  data() {
    return {
      value: false,
      list: [],
    };
  },
  created() {
    eventBus.$on("changeValue", val => {
      this.value = val;
      // console.log(this.value);
      if (this.value === true) {
        var len = this.list.length;
        var current = 0;
        this.list[current].classList.add("active");
        var timer = setInterval(() => {
          this.list[current].classList.remove("active");
          // console.log(current);
          // console.log(len);
          if(current === 3){
            // console.log(len);
            current = current % 3;
          }
          current += 1;
          console.log(current);
          this.list[current].classList.add("active");
        }, 500);
        setTimeout(() => {
          clearInterval(timer);
          this.value = false;
          console.log(this.value);
        }, 8000);
        // setTimeout(() => {
        //   console.log('After Timeout');
        //   this.value = false;
        // }, 1000);
      }
    });
  },
  mounted() {
    this.list = this.$refs.list;
    console.log(this.list);
  }
};
</script>

<style scoped>
</style>