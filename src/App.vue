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
    }
  },
  mounted(){
    this.checkDevice();
    this.$store.dispatch('getPosts','https://167.99.215.131:6950/v1/posts');
  }
}
</script>

