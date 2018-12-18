<template>
  <div>
    <h1>New Attendant Here!</h1>
    <div class="row d-flex justify-content-md-center">
      <form class="col-6">
        <div class="form-group">
          <label :class="{ 'empty': isEmpty.department }" for="department">Department</label>
          <input
            @input="checkDepartment"
            @blur="checkDepartment"
            v-model.trim="formData.department"
            class="form-control"
            id="department"
            placeholder="Please Enter Your Department"
          >
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
          <label class="form-check-label" for="confirm">Please Confirm Here</label>
        </div>
        <button
          :disabled="!formData.confirm || formData.department.length === 0 || formData.name.length === 0"
          @click.prevent="submit"
          class="btn btn-danger"
        >Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        department: "",
        name: "",
        confirm: false
      },
      isEmpty: {
        department: false,
        name: false
      }
    };
  },
  methods: {
    submit() {
      var newAttendant = this.formData;
      this.$http
        .post("https://vue-lottery.firebaseio.com/attendantList.json", newAttendant)
        .then(res => console.log(res))
        .then(() => {
          this.formData.department = "";
          this.formData.name = "";
          this.formData.confirm = false;
        })
        .catch(err => console.log(err));
    },
    checkDepartment() {
      if (this.formData.department.length === 0) {
        this.isEmpty.department = true;
      } else {
        this.isEmpty.department = false;
      }
    },
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