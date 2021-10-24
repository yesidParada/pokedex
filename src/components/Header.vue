<template>
  <div class="navbar-color">
    <div class="navbar-icon">
      <img src="../assets/logo.png" alt="" srcset="" width="30" height="24">
    </div>
    <div>
      <h1>Poke Api</h1>
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

@Options({
  components: {
  },
})
export default class Header extends Vue {}
</script>
<style lang="scss">
.navbar-color {
  background: #ef5350;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
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
</style>
