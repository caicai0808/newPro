<template>
  <div id="app">
    <VoteIndex/>
  </div>
</template>

<script>
import VoteIndex from './components/VoteIndex'

export default {
  name: 'App',
  components: {
    VoteIndex
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
.mint-field .mint-cell-title{
  text-align: left;
  width: 120px !important;
}
</style>
