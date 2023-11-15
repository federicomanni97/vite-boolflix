<template>
    <HeaderComponent/>
    <div class="container">
      <div class="row">
        <div class="col-12" v-for="(movie,index) in store.movieList" :key="movie.id">
          {{ movie.title }}
        </div>
      </div>
    </div>
    <div class="container">
      <h1>Series</h1>
      <div class="row">
        <div class="col-12" v-for="(series,index) in store.seriesList" :key="series.id">
          {{ series.name }}
        </div>
      </div>
    </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import {store} from './data/store'
import axios from 'axios';
export default {
  name: "App",
  components: {
    HeaderComponent
  },
  data(){
    
    return {
      store,
    };
  },
  methods:{
    getMoviesAndSeries(){
      const movieUrl = this.store.apiUrl + this.store.endPoint.movies;
      axios.get(movieUrl, {params: this.store.params}).then((res) =>{
        console.log(res.data.results);
        this.store.movieList = res.data.results;
      })
      const seriesUrl = this.store.apiUrl + this.store.endPoint.series;
      axios.get(seriesUrl, {params: this.store.params}).then((res) =>{
        console.log(res.data.results);
        this.store.seriesList = res.data.results;
      })
    }
  },
  created(){
    this.getMoviesAndSeries();
  }
}
</script>

<style lang="scss" scoped>

</style>