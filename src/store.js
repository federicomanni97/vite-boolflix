import {reactive} from 'vue';
export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/movie',
    endPoint: {
        movie: "search/movie",
        series: "search/tv"
    },
    api_key: "",
    query: "a",
    error: "", 
    movieList: [],
    seriesList: []
})