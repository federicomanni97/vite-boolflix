<template>
    <div class="bg-dark d-flex justify-content-between p-3">
        <h1 class="text-uppercase text-danger">Boolflix</h1>
        <div class="input-group w-25 p-2">
             <span class="input-group-text" id="basic-addon1">
                <i class="fa-solid fa-magnifying-glass"></i>
             </span>
             <input type="text" class="form-control" placeholder="Cerca il tuo film o il tuo genere" aria-label="Username" aria-describedby="basic-addon1" v-model.trim="filter">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    
    }
}
</script>

<style lang="scss" scoped>

</style>