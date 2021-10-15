<template>
  <div class="w-1/3">
    <h2 class="text-xl text-center">Vos posts</h2>
    <div class="postlist">

      <li v-for="post in posts" :key="post.title">
        <PostCard
        :title="post.name"
        :img="post.image"
        :description="post.species"
        :tags="post.origin"/>
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
    this.getPosts('https://rickandmortyapi.com/api/character')
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
        this.posts=res.results
        console.log(this.posts)
      })

    }
  }
}

</script>
