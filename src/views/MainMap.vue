<template>
  <div>
    <Map/>
  </div>
</template>

<script>
import Map from '@/components/UI/Map'
export default {
  name: "LeafletMap",
  data() {
    return {
        map: null,
        posts: [],
    };
  },
  created() {
  },
components: {
    Map
}



};
</script>
