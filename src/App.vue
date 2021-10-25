<template>
  <Header />
  <router-view/>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from './components/Header.vue';

@Options({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Indie Flower', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
  background: antiquewhite;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
