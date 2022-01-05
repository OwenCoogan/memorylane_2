<template>
  <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <Loader v-if="this.isLoading === true" />
        <div v-if="this.isLoading === false">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800" v-bind:post="post">{{post.title}}</h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t">
            <p>{{post.content}}</p>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import Loader from '@/assets/svg/Loader'
import axios from 'axios'
export default {
  name: 'PostPage',
  props: {
  },
  components: {
      Loader,
  },
  data(){
    return{
      post:null,
      isLoading:true
    }
  },
  mounted(){
    this.getPost('http://localhost:6950/v1/posts/'+this.$route.params.id)
  },
  methods:{
    async getPost(url){
        await axios.get(url)
        .then( res => this.post = res.data.data)
        .then(console.log(this.post))
        .then(this.isLoading = false)
    },
  }
}
</script>
