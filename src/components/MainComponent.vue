<template>
    <div class="col-3">
        <div class="flip-card p-4 h-100 w-100">
            <div class="flip-card-inner w-100 h-100">
                <div class="flip-card-front ">  
                    <img :src="NotFoundImg()" class="h-100 w-100 shadow-lg object-fit-cover" alt="">
                </div>       
                <div class="flip-card-back text-center shadow-lg overflow-y-auto scrollbarhidden"> 
                    <h3 class="px-5 py-4 logo">{{ title }}</h3>
                    <h5 class="p-2">{{ realTitle }}</h5>
                    <img :src="languageFlags()" alt="" class="flags">
                    <p class="fs-6 text-warning p-3"><i class="fa-solid fa-star" v-for="n in Math.round(vote / 2)"></i></p>
                    <span  class="text-center p-1 movietrama">{{ overview }}</span>
                    <div class="py-3">
                        <button class="btn btn-secondary opacity-50" @click="overviewCards()">Details</button>
                    </div>
                </div>
            </div> 
        </div>  
        <div v-if="overviewAppear" @click="overviewDisappear()" class="fixedschedule d-flex justify-content-center align-items-center">
            <div class="w-50 rounded-4 bg-secondary text-light">
                <img class="rounded-4 w-100" :src="backdropImage" alt="">
                <div class="p-4">
                    <h1>{{title}}</h1>
                    <h5>{{realTitle}}</h5>
                    <div>
                        <ul class="d-flex list-unstyled ">
                            <li class="rounded-5 mx-1 p-2 bg-dark" v-for="credits in store.actorsList">{{ credits }}</li>
                        </ul>
                    </div>
                    <p class="fs-4 text-warning"><i class="fa-solid fa-star" v-for="n in Math.round(vote / 2)"></i></p>
                    <span class="text-center movietrama">{{ overview }}</span>
                    
                </div>
            </div>
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
        overview: String,
        backdropImage: String
    },
    data() {
        return {
            store,
            overviewAppear: false
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
        },
        NotFoundImg(){
            if (this.image){
                return store.imgInitLink + this.image
            } else {
                return '/images/404-not-found.jpg'
            }
        },
        overviewCards(){
            if (!this.overviewAppear){
                this.overviewAppear = true
                return
            }
        },
        overviewDisappear(){
            if (this.overviewAppear) {
                this.overviewAppear = false
                return
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .flags{
        width: 30px;
    }
.flip-card {
  background-color: transparent;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;  
  text-align: center;
  transition: transform 0.9s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
  cursor: pointer;
}

.flip-card-front, .flip-card-back {
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  color: black;
}

.flip-card-back {
  position: absolute;
  top: 0;
  background-color: #434343;
  color: white;
  transform: rotateY(180deg);
}

.movietrama{
    font-size: 18px;
}

.scrollbarhidden::-webkit-scrollbar {
  display: none;
}

.fixedschedule{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0,0,0,0.8);
}

</style>