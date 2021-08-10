import axios from 'axios';

const API_KEY = 'da226fdb9ad6b858554c92abc75f8d5f';
// const MAIN_URL = 'https://api.themoviedb.org';

const fetchMovies = {

    getPopular() {
        return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
            .then(r => r.data.results)
            .catch(err => err);
    },

    getByKeyWord(query) {
        return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`)
            .then(r => r.data.results)
            .catch(err => err);
    },

    getMovieById(id) {
        return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
            .then(r => r.data)
            .catch(err => err);
    },

    getActorsById(id) {
        return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
            .then(r => r.data)
            .catch(err => err);
    },

    getReviewsById(id) {
        return axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`)
            .then(r => r.data)
            .catch(err => err);
    }
};

// fetchMovies.getMovieById(112);

export default fetchMovies;