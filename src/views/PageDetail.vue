<template>
  <div class="detail">
    <div class="detail-card">
      <h1>title</h1>
      <ul>
        <li>habilidad 1</li>
        <li>habilidad 2</li>
        <li>habilidad 3</li>
      </ul>
      <div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Repellat molestiae dolore possimus unde rem eaque,
          praesentium voluptates, pariatur nemo,
          repudiandae minima officiis. Dolorum accusantium voluptate
          ratione. Delectus laudantium et error?</p>
      </div>
      <div>
        <Paginator />
      </div>
    </div>
    <div>
      <img src="../assets/pokemon.png" alt="" height="300" width="300" srcset="">
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Paginator from '../components/Paginator.vue';

@Options({
  components: {
    Paginator,
  },
})
export default class Card extends Vue {}
</script>
<style lang="scss">
.detail{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  height: calc(100vh - 56px);
  gap: 24px;

  &-card{
    display: flex;
    flex-direction: column;
    background: aquamarine;
    box-sizing: border-box;
    padding: 24px;
    margin: 24px;
    border-radius: 63px 0px;
    box-shadow: 4px 5px 6px;
  }
}
</style>
