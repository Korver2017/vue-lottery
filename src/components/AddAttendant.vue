<template>
  <div class="w-100">
    <h1>New Attendant Here!</h1>
    <div class="row d-flex justify-content-md-center">
      <form class="col-6">
        <div class="form-group">
          <label for="department">Department</label>
          <br>
          <select v-model="formData.department" name="department" id="department">
            <option value="Front-End Engineer">Front-End Engineer</option>
            <option value="Back-End Engineer">Back-End Engineer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Project Manager">Project Manager</option>
          </select>
        </div>
        <div class="form-group">
          <label :class="{ 'empty': isEmpty.name }" for="name">Name</label>
          <input
            @input="checkName"
            @blur="checkName"
            v-model.trim="formData.name"
            class="form-control"
            id="name"
            placeholder="Please Enter Your Name Here"
          >
        </div>
        <div class="form-group form-check">
          <input
            :value="false"
            v-model="formData.confirm"
            type="checkbox"
            class="form-check-input"
            id="confirm"
          >
          <label class="form-check-label" for="confirm">Please Check Your Info Again</label>
        </div>
        <button
          :disabled="!formData.confirm || formData.department === '' || formData.name.length === 0"
          @click.prevent="submit"
          class="btn btn-success"
        >Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      formData: {
        department: "",
        name: "",
        confirm: false
      },
      isEmpty: {
        name: false
      },
    };
  },
  methods: {
    submit() {
      this.$http
        .post("https://vue-lottery.firebaseio.com/attendantList.json", this.formData)
        .then(res => console.log(res))
        .then(() => {
          this.formData.department = "";
          this.formData.name = "";
          this.formData.confirm = false;
        })
        .then(() => {
          eventBus.getData();
        })
        .catch(err => console.log(err));
    },
    // checkDepartment() {
    //   if (this.formData.department.length === 0) {
    //     this.isEmpty.department = true;
    //   } else {
    //     this.isEmpty.department = false;
    //   }
    // },
    checkName() {
      if (this.formData.name.length === 0) {
        this.isEmpty.name = true;
      } else {
        this.isEmpty.name = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
form {
  text-align: left;
}

.empty {
  color: red;
}
</style>