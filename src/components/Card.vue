<template>
  <div class="card-pokemon">
    <div>
      <img alt="Vue logo" src="../assets/logo.png" width="50" height="50">
    </div>
    <div class="card-title">
      <h3>{{name}}</h3>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    name: String,
  },
})
export default class Card extends Vue {
  name!: string
}
</script>
<style >
.card-pokemon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-direction: row-reverse;
  background: white;
  border-radius: 5px;
  padding: 1.3rem;
  box-sizing: border-box;
  box-shadow: 1px 1px 4px #c0c0c0;
  cursor: pointer;
}
</style>
