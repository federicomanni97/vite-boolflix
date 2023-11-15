<template>
  <div>
    <h1>ciao</h1>
  </div>
</template>

<script>
import {store} from './store'
import axios from 'axios';
export default {
  name: "App",
  data(){
    
    return {
      store,
    };
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl).then((res) =>{
        console.log(res.data);
      })
    }
  },
  // created(){
  //   this.getApi();
  // }
}
</script>

<style lang="scss" scoped>

</style>