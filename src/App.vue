<template>
  <div id="app">
    <top-header />
    <router-view/>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader/TopHeader';

export default {
  name: 'app',
  components: {
    TopHeader,
  },
};
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
