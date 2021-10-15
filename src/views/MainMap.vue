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
