<template>
    <h1>Movies</h1>
    <div class="row">
        <div class="col-12" v-for="(movie,index) in store.movieList" :key="movie.id">
            {{ movie.title }}
        </div>
    </div>
    <h1>Series</h1>
    <div class="row">
        <div class="col-12" v-for="(series,index) in store.seriesList" :key="series.id">
        {{ series.name }}
        </div>
    </div>
</template>
<script>
import {store} from '../data/store'
export default {
    name: 'MainComponent',
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>

</style>