<template>
  <div class="w-1/3">
    <h2 class="text-xl text-center">Vos posts</h2>
    <div class="postlist">

      <li v-for="post in posts" :key="post.title">
        <PostCard
        :title="post.title"
        :id="post._id"
        :img="post.image"
        :description="post.content"
        :tags="post.tags"
        :lat="post.gpsPositionLat"
        :long="post.gpsPositionLong"
        />
      </li>
    </div>
  </div>
</template>

<script>
import PostCard from '@/components/UI/PostCard'
import axios from 'axios'
export default {
  name: 'PostList',
  props: {
  },
  components:{
    PostCard
  },
  data(){
    return{
      posts:null
    }
  },
  mounted(){
    this.getPosts('http://localhost:6950/v1/posts')
  },
  methods:{
    async getPosts(url){
        const res = await axios.get(url, {
            })
      this.posts = res.data.data
      console.log(this.posts[0]._id)

    }
  }
}

</script>
