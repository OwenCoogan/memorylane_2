<template>
  <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
          
      </div>
</template>

<script>
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
    this.getPosts('https://rickandmortyapi.com/api/character/'+this.$route.params.id)
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
        this.post=res
        console.log(this.post)
      })

    }
  }
}
</script>
