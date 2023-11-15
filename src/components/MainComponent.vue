<template>
        <div class="col-3">
            <img :src="image" class="w-100" alt="">
            <div class="fs-4 text-center text-light pt-2">
                <h3 class="px-5 py-2 logo">{{ title }}</h3>
                <h5>{{ realTitle }}</h5>
                <img :src="languageFlags()" alt="" class="flags">
                <p class="fs-6 text-warning"><i class="fa-solid fa-star" v-for="n in Math.round(vote / 2)"></i></p>
                <img :src="flag" alt="" class="w-100">
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
        flag: String,
    },
    data() {
        return {
            store
        }
    },
    methods:{
        languageFlags(){
            if(this.language === 'en'){
                return this.store.flags.en
            } else if (this.language === 'fr'){
                return this.store.flags.fr
            } else if (this.language === 'ita'){
                return this.store.flags.ita
            } else if (this.language === 'esp'){
                return this.store.flags.esp
            } else if (this.language === 'ja'){
                return this.store.flags.ja
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .flags{
        width: 30px;
    }

</style>