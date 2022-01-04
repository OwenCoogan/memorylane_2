<template>
  <div class="flex">
    <PostList v-if="this.device !='Mobile'"/>
    <Map/>
  </div>
</template>

<script>
import Map from '@/components/UI/Map'
import PostList from '@/components/UI/PostList'
export default {
  name: "LeafletMap",
  components: {
      Map,
      PostList
  },
  data() {
    return {
        posts: [],
        device : this.$store.state.device,
    };
  },
  created() {
  }
};
</script>
