<template>
  <div class="w-2/3" id="mapContainer"/>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
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
 methods:{
 },

  mounted() {
    this.$store.dispatch('currentLocation')
    .then(coordinates => {
    console.log(coordinates)
    localStorage.setItem('coordinates', JSON.stringify(coordinates));
    this.map = L.map("mapContainer").setView([coordinates.lat,coordinates.long], 200);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    }).addTo(this.map);
    this.currentMarker = L.circle([coordinates.lat,coordinates.long],{radius: 5}).addTo(this.map);
    setInterval(function() {
      localStorage.setItem('coordinates', JSON.stringify(coordinates));
    })
    }, 60 * 1000);

  }

};
</script>
