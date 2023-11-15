<template>
  <div>

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
    get(){
      axios.get(store.apiUrl).then((res) =>{
        console.log(res.data);
      })
    }
  },
  created(){
    this.getApi();
  }
}
</script>

<style lang="scss" scoped>

</style>