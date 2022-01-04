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
    console.log(this.$store.state.device)
  }
}
</script>

