<template>
  <div id="app">
    <img src="./assets/logo.png">
    <app-attendant></app-attendant>
  </div>
</template>

<script>
import appAttendant from './components/Attendant'

export default {
  name: 'App',
  components: {
    appAttendant,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
