<template>
  <div class="p-10">
    <!--Card 1-->
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" :src="img" alt="Mountain">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-gray-700 text-base">
        {{description}}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
      <span v-for="tag in tags" :key="tag.name" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{tag}}</span>
      </div>
      <router-link  :to="'/Post/'+id"  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Link mofo</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    title: {
      type: String,
      required: true,
      default:'azrazeraze'
    },
    img: {
      type: String,
      default: '../image-path/image-name.jpg',
    },
    description: {
      type: String,
      default: 'Lorem Ipsum',
    },
    tags: {
      type: Object,
    },
  },
  components:{
  },
  data(){
  },
  mounted(){
  },
  methods:{
  }
}

</script>
