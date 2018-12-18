<template>
  <div>
    <h1>New Attendant Here!</h1>
    <form>
      <div class="form-group">
        <label for="department">Department</label>
        <input
          
          class="form-control"
          id="department"
          placeholder="Your Department Here"
        >
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          class="form-control"
          id="name"
          placeholder="Your Name Here"
        >
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="confirm">
        <label class="form-check-label" for="confirm">Confirm Here</label>
      </div>
      <button type="submit" class="btn btn-danger">Submit</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
form {
  text-align: left;
}
</style>