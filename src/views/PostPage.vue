<template>
  <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800" v-bind:post="post">{{post.title}}</h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

      </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PostPage',
  props: {
  },
  data(){
    return{
      post:null
    }
  },
  mounted(){
    this.getPost('http://localhost:6950/v1/post/'+this.$route.params.id)
  },
  methods:{
    async getPost(url){
        const res = await axios.get(url, {
            })
      this.post = res.data.data
      console.log(this.post)

    }
  }
}
</script>
