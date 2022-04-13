export const geolocation = {
  namespaced: true,
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
    navigateToPostPoint({ commit },position){
      const postPosition = {
        long: position.long,
        lat: position.lat,
      }
      commit('UPDATE_CURRENT_POSITION', postPosition);
    }

  },
  mutations: {
    CHANGE_GEOLOCATION(state, payload) {
      state.geolocation = payload;
    },
    UPDATE_CURRENT_POSITION(state,payload) {
      state.currentPosition = payload
    },

  }
};
