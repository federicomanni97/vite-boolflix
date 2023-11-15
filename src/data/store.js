import {reactive} from 'vue';
export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movies: 'search/movie',
        series: 'search/tv'
    },
    params: {
        api_key: '47b80f2baf52ebe987f1bbb273201ac5',
        query: 'Hobbit',
    },
    error: '', 
    loading: true,
    movieList: [],
    seriesList: [],
    flags: {
        en: '/public/images/en-flag.jpg', 
        fr: '/public/images/france-flag.jpg',
        ita: '/public/images/ita-flag.jpg',
        esp: '/public/images/spain-flag.jpg',
        ja: '/public/images/ja-flag.jpg'
    }
})