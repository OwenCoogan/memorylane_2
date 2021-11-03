<template>
  <div class="flex">
    <PostList/>
    <Map/>
    <a class="bottom-0 -right-0 z-50 text-pink-500 absolute bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
      <img src="https://img.icons8.com/ios/100/000000/plus-math.png"/>
    </a>
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
