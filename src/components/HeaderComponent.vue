<template>
    <div class="bg-dark d-flex justify-content-between p-3">
        <h1 class="text-uppercase text-danger">Boolflix</h1>
        <div class="input-group w-25 p-2">
             <span class="input-group-text" id="basic-addon1" @click="searchBar()">
                <i class="fa-solid fa-magnifying-glass"></i>
             </span>
             <input type="text" class="form-control" placeholder="Cerca il tuo film o il tuo genere" aria-label="Username" aria-describedby="basic-addon1" v-model.trim="search">
        </div>
    </div>
</template>

<script>
import {store} from '../data/store.js'
import axios from 'axios'
export default {
    data() {
        return {
            store,
            search: '',
        }
    },
    methods: {
        searchBar(){
        const movieUrl = this.store.apiUrl + this.store.endPoint.movies;
        const seriesUrl = this.store.apiUrl + this.store.endPoint.series;
            if(this.search !== '')
            this.store.params.query = this.search
            axios.get(movieUrl, {params: this.store.params}).then((res) =>{
            console.log(res.data.results);
            this.store.movieList = res.data.results;
            })
            axios.get(seriesUrl, {params: this.store.params}).then((res) =>{
            console.log(res.data.results);
            this.store.seriesList = res.data.results;
            })  
        }
    }
}
</script>

<style lang="scss" scoped> 
    .input-group-text{
        cursor: pointer;
    }

</style>