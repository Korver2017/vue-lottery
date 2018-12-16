<template>
  <div id="app">
    <img src="./assets/logo.png">
    <app-attendants></app-attendants>
  </div>
</template>

<script>
import appAttendants from './components/Attendants'

export default {
  name: 'App',
  components: {
    appAttendants,
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
