<template>
  <div>
    <button class="btn"><i class="fas fa-angle-left"></i></button>
    <button class="btn"><i class="fas fa-angle-right"></i></button>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Paginator extends Vue {}
</script>

<style lang="scss">
.btn {
  border: none;
  background: transparent;
  font-size: xx-large;
}

</style>
