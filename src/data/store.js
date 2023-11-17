import {reactive} from 'vue';
export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movies: 'search/movie',
        series: 'search/tv',
        actors: 'movie/',
    },
    // 49051/credits
    params: {
        api_key: '47b80f2baf52ebe987f1bbb273201ac5',
        query: 'Hobbit',
    },
    params2: {
        api_key: '47b80f2baf52ebe987f1bbb273201ac5',
    },
    error: '', 
    loading: true,
    movieList: [],
    seriesList: [],
    actorsList:[],
    flags: {
        en: '/images/en-flag.jpg', 
        fr: '/images/france-flag.jpg',
        ita: '/images/ita-flag.jpg',
        esp: '/images/spain-flag.jpg',
        ja: '/images/ja-flag.jpg'
    },
    imgInitLink: 'https://image.tmdb.org/t/p/w342',
    imgBackdrop: 'https://image.tmdb.org/t/p/original'
})