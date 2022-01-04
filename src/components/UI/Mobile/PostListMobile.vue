<template>
  <div class="post-list--mobile absolute left-1/2 transform -translate-x-1/2 z-50">
    <h2 class="text-xl text-center">Vos posts</h2>
    <vueper-slides class="postlist">
      <vueper-slide v-for="post in posts" :key="post.title">
        <PostCard
        :title="post.title"
        :id="post._id"
        :img="post.image"
        :description="post.content"
        :tags="post.tags"
        :lat="post.gpsPositionLat"
        :long="post.gpsPositionLong"
        />
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import PostCard from '@/components/UI/PostCard'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import axios from 'axios'
export default {
  name: 'PostList',
  props: {
  },
  components:{
    PostCard,
    VueperSlides,
    VueperSlide
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
