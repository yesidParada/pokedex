<template>
  <div class="content">
    <router-link class="btn" to="/">
      <i class="fas fa-angle-left"></i>
      Atras
    </router-link>
  </div>
  <div class="detail">
    <div>
      <img
        :src="pokemonInfo.img"
        :alt="pokemonInfo.name"
        height="300" width="300" srcset="">
    </div>
    <div class="detail-card">
      <h1>{{pokemonInfo.name}}</h1>
      <ul class="group-item">
        <li v-for="item in pokemonInfo.abilities"
        :key="item.index" class="item">{{item}}</li>
      </ul>
      <div>
        <h3>Detalles:</h3>
        <div class="content-detail">
          <label
            v-for="item in pokemonInfo.detail" :key="item.name"
            class="content-detail__item">{{item.name}}: <p>{{item.value}}</p></label>
          <label class="content-detail__item">Exp: <p>{{pokemonInfo.experience}}</p></label>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapState } from 'vuex';

@Options({
  computed: {
    ...mapState(['pokemonInfo']),
  },
})
export default class Card extends Vue {}
</script>
<style lang="scss">
.content {
  display: flex;
}
.detail{
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fit,minmax(15rem, 1fr));
  gap: 24px;

  &-card{
    display: flex;
    flex-direction: column;
    background: white;
    box-sizing: border-box;
    text-transform: capitalize;
    padding: 3.3rem;
    margin: 1.3rem;
    border-radius: 63px 0px;
    box-shadow: 4px 5px 6px;
  }
}
.group-item {
  list-style: none;
}
.item {
  border: 1px solid #c0c0c0;
  box-sizing: border-box;
  padding: 0.4rem;
  border-radius: 16px;
  margin: 0.2rem;
}
.content-detail{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-weight: bold;
  }
}
</style>
