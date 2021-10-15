<template>
  <div class="flex">
    <Map/>
    <PostList/>
  </div>
</template>

<script>
import Map from '@/components/UI/Map'
import PostList from '@/components/UI/PostList'
export default {
  name: "LeafletMap",
  data() {
    return {
        posts: [],
    };
  },
  created() {
  },
components: {
    Map,
    PostList
}
};
</script>
