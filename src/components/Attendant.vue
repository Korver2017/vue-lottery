<template>
  <div>
    <li ref="list" class="d-flex avatar col-3" v-for="(value, key) in attendantsList" :key="key">
      {{ key }}
      <img :src="value" alt>
      
    </li>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      value: false,
      // attendantsLoaded: false,
      // list: [],
      attendantsList: {}
    };
  },
  created() {
    eventBus.$on("updateData", data => {
      this.attendantsList = data;
    });
    eventBus.$on("changeValue", val => {
      this.value = val;
      // console.log(this.value);
      if (this.value === true) {
        this.list = this.$refs.list;
        var len = this.list.length;
        var current = 0;
        this.list[current].classList.add("customActive");
        var timer = setInterval(() => {
          this.list[current].classList.remove("customActive");
          current += 1;
          if (current === len) {
            current = current % len;
          }
          console.log(current);
          this.list[current].classList.add("customActive");
        }, 300);
        setTimeout(() => {
          clearInterval(timer);
          this.value = false;
          console.log(this.value);
        }, 8000);
      }
    });
  }
};
</script>

<style scoped lang="scss">
.avatar {
  list-style-type: none;
  border: 2px solid #000;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.customActive {
    img {
      border: 5px solid #00cc99;
      width: 80%;
    }
  }
  img {
    // z-index: -1;
    width: 70%;
    border-radius: 50%;
    border: 5px solid #000;
  }
}
</style>