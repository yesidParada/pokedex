<template>
  <div class="home">
    <div class="home-content">
      <Card
        v-for="item in pokemonlist"
        :key="item.index"
        :name="item.name"
        @click="viewDetail(item.url)"
      />
    </div>
    <div class="paginator">
      <Paginator
        :backPages="backList"
        :nextPages="nextList"
       />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';
import Card from '../components/Card.vue';
import Paginator from '../components/Paginator.vue';

@Options({
  components: {
    Card,
    Paginator,
  },
  methods: {
    ...mapActions(['getData', 'getPokemonInfo']),
    viewDetail(url: string) {
      if (url) {
        this.getPokemonInfo(url);
        this.$router.push('/detail');
      }
    },
  },
  computed: {
    ...mapState(['pokemonlist', 'backList', 'nextList']),
  },
  mounted() {
    this.getData();
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
  .home {
    box-sizing: border-box;
    padding: 24px;
    width: 100%;
  }
  .home-content {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fit,minmax(15rem, 1fr));
  }
  .paginator {
    position: fixed;
    bottom: 0px;
  }
</style>
