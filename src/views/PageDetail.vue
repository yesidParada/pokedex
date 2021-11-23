<template>
  <div class="container">
    <div class="content">
      <router-link class="btn" to="/">
        <i class="fas fa-angle-left"></i>
        Atras
      </router-link>
    </div>
    <div class="detail">
      <div class="detail-img">
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
            <div class="content__container" v-for="item in pokemonInfo.detail" :key="item.name">
              <label
                class="content-detail__item">{{item.name}}: <p>{{item.value}}</p>
              </label>
              <div class="state">
                <div class="complete--state" :style="{ width: item.value + '%' }"></div>
              </div>
            </div>
            <div class="content__container">
              <label class="content-detail__item">Exp: <p>{{pokemonInfo.experience}}</p></label>
              <div class="state">
                <div class="complete--state" :style="{ width: pokemonInfo.experience + '%' }"></div>
              </div>
            </div>
          </div>
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
@import '../styles/index.scss';
.container {
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.content {
  display: flex;
}
.content__container {
  width: 100%;
  padding: 12px 0;
}
.detail{
  display: grid;
  align-items: center;
  justify-content: center;
  color:$secundary-color;
  width: 80%;
  box-sizing: border-box;
  border: 1px solid $blue-color;
  border-radius: 6px;
  grid-template-columns: repeat(auto-fit,minmax(15rem, 1fr));
  box-shadow: 4px 5px 6px $dark-blue-color;
  gap: 24px;

  &-img {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background: $blue-color;
  }

  &-card{
    display: flex;
    flex-direction: column;
    color: $blue-color;
    box-sizing: border-box;
    text-transform: capitalize;
    padding: 3.3rem;
  }
}
.group-item {
  list-style: none;
  display: flex;
  gap: 24px;
}
.item {
  border: 1px solid $dark-blue-color;
  box-sizing: border-box;
  padding: 0.4rem;
  border-radius: 16px;
  margin: 0.2rem;
  background: $dark-blue-color;
  color: $terciary-color;
  font-weight: bold;
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
.complete--state {
  height: 20px;
  background: $terciary-color;
  border-radius: 5px;
  background-image: repeating-linear-gradient(
-45deg, #02020200, transparent 10px, $primary-color 10px, $primary-color 20px);
}
.state {
  display: flex;
  z-index: 9;
  height: 20px;
  width: 100%;
  background: $gray-color;
  border-radius: 5px;
  border: 1px solid $dark-blue-color;
  background-image:
  repeating-linear-gradient(-45deg, #02020200, transparent 10px, #afafaf 10px, #afafaf 20px);
}
</style>
