<template>
  <Header/>
  <router-view/>
</template>
<script>
import Header from '@/components/UI/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

