<template>
        <div class="col-3">
            <img :src="imgMovie" class="w-100" alt="">
            <div class="fs-4 text-center text-light pt-2">
                <h3>{{ movieTitle }}</h3>
                <h6>{{ movieRealTitle }}</h6>
                <p>{{ movieLanguage }}</p>
                <p>{{ movieVote }}</p>
            </div>    
            <img :src="tvSeriesImg" class="w-100" alt="">
            <div class="fs-4 text-center text-light pt-2">
                <h3>{{ tvSeriesTitle }}</h3>
                <h6>{{ tvSeriesRealTitle }}</h6>
                <p>{{ tvSeriesLanguage }}</p>
                <p>{{ tvSeriesVote }}</p>
            </div>
        </div>             
        <!-- <h1>Series</h1>
        <div class="row">
            <div class="col-3" v-for="(series,index) in store.seriesList" :key="series.id">
            {{ series.name }}
            </div>
        </div> -->
</template>
<script>
import {store} from '../data/store'
export default {
    name: 'MainComponent',
    props: {
        imgMovie: String,
        movieTitle: String,
        movieRealTitle:String,
        movieLanguage: String,
        movieVote: Number,
        tvSeriesImg: String,
        tvSeriesTitle: String,
        tvSeriesRealTitle:String,
        tvSeriesLanguage: String,
        tvSeriesVote: Number,
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>

</style>