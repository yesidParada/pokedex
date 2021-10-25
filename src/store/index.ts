import { createStore } from 'vuex';

export default createStore({
  state: {
    pokemonlist: {},
    backList: '',
    nextList: '',
    pokemonInfo: {
      name: '',
      img: '',
      hp: '',
      atack: 0,
      defence: 0,
      experience: 0,
      especial: '',
      speed: '',
      abilities: {},
    },
    urlDefault: 'https://pokeapi.co/api/v2/pokemon?limit=5&offset=0',
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
        hp: response.stats[0].base_stat,
        atack: response.stats[1].base_stat,
        defence: response.stats[2].base_stat,
        experience: response.base_experience,
        especial: response.stats[3].base_stat,
        speed: response.stats[5].base_stat,
        abilities: response.abilities,
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
