import { createStore } from 'vuex'


export default createStore({
  state: {
    location:null,
    gettingLocation: false,
  },
  mutations: {
    TOGGLE_LOADING(state, payload) {
      state.loading = !!payload;
    },
    CHANGE_GEOLOCATION(state, payload) {
      state.geolocation = payload;
    },
  },
  actions: {
    currentLocation({ commit }) {
      const { geolocation } = navigator;
      commit('TOGGLE_LOADING', true);

      return new Promise((resolve, reject) => {
        if (geolocation) {
          geolocation
            .getCurrentPosition(({ coords }) => {
              const currentPosition = {
                long: coords.longitude,
                lat: coords.latitude,
              };
              commit('CHANGE_GEOLOCATION', currentPosition);
              commit('TOGGLE_LOADING', false);
              resolve(currentPosition);

              return currentPosition;
            },
            (err) => {
              commit('TOGGLE_LOADING', false);
              reject(err);
            });
        } else {
          console.info('Geolocation is not supported by this browser.');
          commit('TOGGLE_LOADING', false);
          reject();
        }
      });
    },
  },
  modules: {
  }
})