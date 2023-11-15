<template>
        <div class="col-3">
            <img :src="imgMovie" class="w-100" alt="">
            <div class="fs-4 text-center text-light pt-2">
                <h5>{{ movieTitle }}</h5>
                <h6>{{ movieRealTitle }}</h6>
                <p>{{ movieLanguage }}</p>
                <p>{{ movieVote }}</p>
            </div>    
        </div>             
    
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