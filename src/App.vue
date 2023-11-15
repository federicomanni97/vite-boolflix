<template>
    <HeaderComponent/>
    <div class="bg-container">
      <div class="container">
        <h1 class="text-light">Movies</h1>
          <div class="row">
              <MainComponent v-for="(movie,index) in store.movieList" :key="movie.id"
              :imgMovie="'https://image.tmdb.org/t/p/w342'+movie.poster_path"
              :movieTitle="movie.title"
              :movieRealTitle="movie.original_title"
              :movieLanguage="movie.original_language"
              :movieVote="movie.vote_average"/>
          </div>
          <h1 class="text-light">Series</h1>
          <div class="row">
              <MainComponent v-for="(series,index) in store.seriesList" :key="series.id"
              :tvSeriesImg="'https://image.tmdb.org/t/p/w342'+series.poster_path"
              :tvSeriesTitle="series.name"
              :tvSeriesRealTitle="series.original_name"
              :tvSeriesLanguage="series.original_language"
              :tvSeriesVote="series.vote_average"/>
          </div>
      </div>
    </div>  
</template>

<script>
import MainComponent from './components/MainComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import {store} from './data/store'
import axios from 'axios';
export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent
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
.bg-container{
  background-color: #434343;
}

</style>