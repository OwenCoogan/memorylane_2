import { createStore } from 'vuex'
import { auth } from './auth.module';
import axios from 'axios'
export default createStore({
  modules: {
    auth : auth
  },
  state: {
    location:null,
    gettingLocation: false,
    currentUser:null,
    currentPostList:null,
    device:null,
    posts:null,
  },
  getters: {
    status: state => state.location,
  },
  mutations: {
    TOGGLE_LOADING(state, payload) {
      state.loading = !!payload;
    },
    CHANGE_GEOLOCATION(state, payload) {
      state.geolocation = payload;
    },
    CHECK_DEVICE(state) {
      window.innerWidth <= 690 ? state.device = 'Mobile' : state.device = 'desktop';
    },
    UPDATE_CURRENT_POSITION(state) {
      window.innerWidth <= 690 ? state.device = 'Mobile' : state.device = 'desktop';
    },
    async GET_POSTS(state,url) {
      await axios.get(url, {
      })
      .then(res => {
        console.log(res.status)
        if(res.status != 200){
          state.currentPostList = 'error'
        }
        else{
        state.currentPostList = res.data.data
        }
      });
    }
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
    getPosts({ commit },url){
      commit('GET_POSTS', url);
    },
    checkDevice({ commit }){
      commit('CHECK_DEVICE', navigator.userAgent);
    }
  }
})
