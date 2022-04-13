<template>
  <Header v-show="this.$store.state.device!='Mobile'"/>
  <HeaderMobile v-show="this.$store.state.device==='Mobile'"/>
  <router-view/>
</template>
<script>
import Header from '@/components/UI/Header'
import HeaderMobile from '@/components/UI/Mobile/HeaderMobile'
export default {
  name: 'App',
  components: {
    Header,
    HeaderMobile
  },
  methods:{
    checkDevice(){
      this.$store.dispatch('checkDevice')
    },
    redirectUnregistered(){
      console.log(this.$router.currentRoute._value.name ==="Login" )
      if(this.$store.state.auth.status.loggedIn === false && this.$router.currentRoute._value.name ==="Login" && this.$router.currentRoute._value.name ==="Register"){
        this.$router.push('/login')
      }
    }
  },
  mounted(){
    this.checkDevice();
    this.redirectUnregistered();
    this.$store.dispatch('getPosts','http://localhost:6950/v1/posts');

  }
}
</script>

