<template>
  <div>
    <button
      :disabled="!backPages"
      @click="getPokemon(backPages)"
      class="btn">
      <i class="fas fa-angle-left"></i>
    </button>
    <button @click="getPokemon(nextPages)" class="btn"><i class="fas fa-angle-right"></i></button>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapActions, mapMutations } from 'vuex';

@Options({
  props: {
    backPages: String,
    nextPages: String,
  },
  methods: {
    ...mapActions(['getData']),
    ...mapMutations(['setPakemonList']),
    getPokemon(url: string) {
      if (url) {
        this.setPakemonList([]);
        this.getData(url);
      }
    },
  },
})
export default class Paginator extends Vue {
  backPages!: string;

  nextPages!: string;
}
</script>

<style lang="scss">
.btn {
  border: none;
  background: transparent;
  font-size: xx-large;
  cursor: pointer;
  padding-left: 24px;
  text-decoration: none;
}

</style>
