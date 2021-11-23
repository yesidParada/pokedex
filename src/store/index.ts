import { createStore } from 'vuex';

export default createStore({
  state: {
    pokemonlist: {},
    backList: '',
    nextList: '',
    pokemonInfo: {
      name: '',
      img: '',
      experience: 0,
      abilities: {},
      detail: [],
    },
    urlDefault: 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',
    id: 0,
  },
  mutations: {
    setPakemonList(state, response) {
      state.pokemonlist = response.results;
      state.backList = response.previous;
      state.nextList = response.next;
    },
    setPokemonInfo(state, response) {
      state.pokemonInfo = {
        name: response.name,
        img: response.sprites.other.dream_world.front_default,
        experience: response.base_experience,
        abilities: response.abilities.map((item: any) => item.ability.name),
        detail: response.stats.map((item: any) => ({
          name: item.stat.name,
          value: item.base_stat,
        })),
      };
      state.id = response.id;
    },
    setUrlDefault(state, url: string) {
      state.urlDefault = url;
    },
  },
  actions: {
    async getData({ commit }, url: string) {
      try {
        const path = url || this.state.urlDefault;
        commit('setUrlDefault', path);
        const response = await fetch(path);
        const data = await response.json();
        commit('setPakemonList', data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
    async getPokemonInfo({ commit }, url: string) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        commit('setPokemonInfo', data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
  },
  modules: {
  },
});
