<template>
  <div class="navbar-color">
    <div class="navbar-icon">
      <img src="../assets/logo.png" alt="" srcset="" width="30" height="24">
    </div>
    <div>
      <router-link class="title" to="/">Poke Api</router-link>
    </div>
    <div>
      <ul class="nav-group">
        <li class="nav-item">
          Español
        </li>
        <li class="nav-item">
          Ingles
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Header extends Vue {}
</script>
<style lang="scss">
@import '../styles/index.scss';
.navbar-color {
  background: $primary-color;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  color: $dark-blue-color;
  font-weight: bold;
}
.nav-group {
  display: flex;
  list-style: none;
  gap: 24;
  align-items: center;
}
.nav-item {
  padding: 0 24px;
}
.title {
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
}
</style>
