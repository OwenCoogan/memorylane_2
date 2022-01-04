<template>
  <div class="flex">
    <PostList/>
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
        device : null,
    };
  },
  created() {
  }
};
</script>
