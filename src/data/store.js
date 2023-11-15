import {reactive} from 'vue';
export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movies: 'search/movie',
        series: 'search/tv'
    },
    params: {
        api_key: '47b80f2baf52ebe987f1bbb273201ac5',
        query: 'a',
    },
    error: '', 
    loading: true,
    movieList: [],
    seriesList: []
})