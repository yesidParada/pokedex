<template>
  <div class="home">
    <div class="home-content">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <div>
      <Paginator />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Card from '../components/Card.vue';
import Paginator from '../components/Paginator.vue';

@Options({
  components: {
    Card,
    Paginator,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
  .home {
    box-sizing: border-box;
    padding: 24px;
    width: 100%;
    height: calc(100vh - 56px);
  }
  .home-content {
    display: grid;
    gap: 24px;
    grid-auto-rows: 22rem;
    grid-template-columns: repeat(auto-fit,minmax(15rem, 1fr));
  }
</style>
