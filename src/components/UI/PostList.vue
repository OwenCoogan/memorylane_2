<template>
  <div class="w-1/3">
    <h2 class="text-xl text-center">Vos posts</h2>
    <div class="postlist">

      <li v-for="post in posts" :key="post.title">
        <PostCard
        :title="post.title"/>
      </li>
    </div>
  </div>
</template>

<script>
import PostCard from '@/components/UI/PostCard'
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
    this.getPosts('https://rickandmortyapi.com/api/character/2')
  },
  methods:{

    async getPosts(url){
       var myHeaders = new Headers();
        var requestParams = { method: 'GET',
                  headers: myHeaders,
                  mode: 'cors',
                  cache: 'default'
        };
      await fetch(url,requestParams)
      .then(res => res.json())
      .then(res =>{
        this.posts=res
        console.log(this.posts)
      })

    }
  }
}

</script>
