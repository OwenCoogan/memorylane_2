<template>
  <div class="container">
    <!--<header class="jumbotron">
      <h3>
        <strong>{{currentUser.firstname}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
    </p>
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>-->

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Profile',
  data(){
    return({
      user:null
    })
  },
  computed: {
  },
  methods:{
    async getProfile(){
      let accessToken = JSON.parse(localStorage.getItem('MemoryLaneCookie'));
      await axios.get('http://localhost:6950/v1/auth/me', accessToken)
      .then(res => {
        console.log(res.status)
        this.user = res.data
      });
    }
  },
  mounted() {
    this.getProfile();
  }
};
</script>
