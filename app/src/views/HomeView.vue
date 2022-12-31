<template>
  <div class="flex flex-col h-screen max-h-screen">
    <!--Search and Results-->
    <div class="flex justify-center bg-black bg-cover relative px-4 pt-4 pb-16 ">
      <!-- Search Input-->
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4"></h1>
        <div class="absolute left-10  top-7 ">
          <input  
          class="py-2 px-2 w-60 rounded-tl-md rounded-bl-md focus:outline-none" 
          type="text"
          placeholder="Enter make and model"
          />
          <i class="cursor-pointer
          bg-blue-700
          text-white 
          px-3
          py-3
          rounded-tr-md 
          rounded-br-md 
          items-center
          fa-solid 
          fa-chevron-right"></i>

        </div>
      </div>
      <div class="z-30">
        <!--Info box for car-->
        <carInfo/>
      </div>
    </div>

    <!--map div-->
    <div id="map" class="h-full z-10"></div>

  </div>
</template>

<script>
// @ is an alias to /src

import carInfo from "../components/carInfo.vue"
import L from "leaflet"
import { onMounted } from "vue";
export default {
  name: 'HomeView',
  components: {
    carInfo
  },
  setup() {
   let mymap;

   onMounted(()=>{
    mymap = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW5pc2hzaGFuIiwiYSI6ImNsYzl1bjhjcjBucWYzcWxobmdpcWo5dG8ifQ.gatWcYMlfAluGXCzLviD3w",
      {
      attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: "pk.eyJ1IjoiYW5pc2hzaGFuIiwiYSI6ImNsYzl1bjhjcjBucWYzcWxobmdpcWo5dG8ifQ.gatWcYMlfAluGXCzLviD3w",
  }
)
.addTo(mymap);
   });


  } ,
};
</script>
