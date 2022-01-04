<template>

  <div class="w-2/3 z-40" id="mapContainer">
    <Loader class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
  </div>
</template>
<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Loader from '@/assets/svg/Loader'
export default {
  name: "LeafletMap",

  components: {
      Loader
  },
  data() {
    return {
        map: null,
        mapLoaded:false,
        posts: null,
    };
  },
  created() {
  },
  methods:{

  },
  mounted() {
    this.posts = this.$store.state.posts;

    this.$store.dispatch('currentLocation')
    .then(this.mapLoaded = true)
    .then(coordinates => {
    localStorage.setItem('coordinates', JSON.stringify(coordinates));
    this.map = L.map("mapContainer").setView([coordinates.lat,coordinates.long], 200);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    }).addTo(this.map)

    this.currentMarker = L.circle([coordinates.lat,coordinates.long],{radius: 5}).addTo(this.map);
    setInterval(function() {
      localStorage.setItem('coordinates', JSON.stringify(coordinates));
    })
    }, 60 * 1000);

  }

};
</script>
