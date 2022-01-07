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
          <form :action="`https://167.99.215.131:6950/v1/posts/upload/${post._id}`" enctype="multipart/form-data" method="POST" @submit="submitImage">
            <input type="file" name="myImage" accept="image/*" @change="this.onFilePicked"/>
            <input type="submit" value="Upload Photo"/>
          </form>
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
      file:null,
      isLoading:true
    }
  },
  mounted(){
    this.getPost('https://167.99.215.131:6950/v1/posts/'+this.$route.params.id)
  },
  methods:{
    async getPost(url){
        await axios.get(url)
        .then( res => this.post = res.data.data)
        .then(console.log(this.post))
        .then(this.isLoading = false)
    },
    onFilePicked (event) {
      const files = event.target.files
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    },
    async submitImage(e){
      e.preventDefault();
      console.log(this.image)
      const formData = new FormData();
      formData.append('file',this.image);
      await axios.post(`https://167.99.215.131:6950/v1/posts/upload/${this.post._id}`,formData)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    }
  }
}
</script>
