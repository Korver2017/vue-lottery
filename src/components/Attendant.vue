<template>
  <div>
    <h1>Hello Every Attendant!</h1>
    <div class="row">
      <li ref="list" v-for="name in nameList" :key="name" class="avatar d-flex col-2">
        <p class="m-0">{{ name }}</p>
        <img ref="pic" class="my-1" src="" alt="">
      </li>
    </div>
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
        this.list[current].classList.add("customActive");
        var timer = setInterval(() => {
          this.list[current].classList.remove("customActive");
          current += 1;
          if(current === len){
            // console.log(len);
            current = current % len;
          }
          console.log(current);
          this.list[current].classList.add("customActive");
        }, 500);
        setTimeout(() => {
          clearInterval(timer);
          this.value = false;
          console.log(this.value);
        }, 8000);
      }
    });
  },
  methods: {
    randomUser() {
      var picList = this.$refs.pic;
      var picListLen = picList.length;
      fetch('https://randomuser.me/api/?results=100&gender=female', {})
        .then((response) => {
          console.log(response);
          return response.json();
        }).then((jsonData) => {
          console.log(jsonData.results);
          for(let i = 0; i < picListLen; i ++){
            var randomNum = Math.floor((Math.random() * 100) + 1);
            picList[i].src = jsonData.results[randomNum].picture.medium
          }
        }).catch((err) => {
          console.log('錯誤:', err);
        });
    }
  },
  mounted() {
    this.list = this.$refs.list;
    console.log(this.list);
    this.randomUser();
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