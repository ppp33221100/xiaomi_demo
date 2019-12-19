<template>
  <div id="app">
    <tabbar v-show="$route.meta.flag"></tabbar>
    <router-view/>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar.vue'
import './assets/js/remStyle.js'
import './assets/js/jquery-1.11.0.min.js'
export default {
  name: 'App',
  components:{
    Tabbar
  },
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
