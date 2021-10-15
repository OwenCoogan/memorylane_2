<template>
  <div class="w-1/3">
    <h2 class="text-xl text-center">Vos posts</h2>
    <div class="postlist">
      <li v-for="post in posts" :key="post.title">
        {{ post.title }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    userId:null,
    posts:null
  },
  mounted(){

  },
  methods:{

  }
}

</script>
