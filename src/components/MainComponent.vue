<template>
        <div class="col-3">
            <img :src="image" class="w-100" alt="">
            <div class="fs-4 text-center text-light pt-2">
                <h3>{{ title }}</h3>
                <h6>{{ realTitle }}</h6>
                <p>{{ language }}</p>
                <p>{{ vote }}</p>
            </div>    
        </div>             
</template>
<script>
import {store} from '../data/store'
export default {
    name: 'MainComponent',
    props: {
        image: String,
        title: String,
        realTitle:String,
        language: String,
        vote: Number,
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