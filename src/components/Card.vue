<template>
  <div class="card-pokemon">
    <div>
      <img alt="Vue logo" src="../assets/logo.png" width="50" height="50">
    </div>
    <div class="card-title">
      <h3>Nombre</h3>
      <p>Detail</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Card extends Vue {}
</script>
<style >
.card-pokemon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-direction: row-reverse;
  background: aqua;
  border-radius: 5px;
  height: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
