<template>
  <div class="w-1/3 post-list--container">
    <h2 class="text-xl text-center">Vos posts</h2>
    <div class="postlist">
      <li v-for="post in posts" :key="post.title">
        <PostCard
        :title="post.title"
        :id="post.id"
        :img="post.image"
        :description="post.content"
        :tags="post.tags"
        :lat="post.latitude"
        :long="post.longitude"
        />
      </li>
    </div>
    <CreatePostForm v-if="this.formPostCreateShown === true "/>
    <button @click="toggleForm()">
    <p v-if="this.formPostCreateShown === false">Create a Post</p>
    <p v-else >X</p>

    </button>
  </div>
</template>
<script>
import PostCard from '@/components/UI/PostCard'
import CreatePostForm from '@/components/UI/PostForm'
export default {
  name: 'PostList',
  props: {
  },
  components:{
    PostCard,
    CreatePostForm
  },
  data(){
    return{
      posts:null,
      formPostCreateShown:false,
    }
  },
  mounted(){
    this.posts = this.$store.state.currentPostList.reverse();
  },
  methods:{
    toggleForm(){
      this.formPostCreateShown = !this.formPostCreateShown;
    }
  }
}
</script>
