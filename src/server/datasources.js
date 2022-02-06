import { RESTDataSource } from 'apollo-datasource-rest';

export class MovieAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = 'https://api.themoviedb.org/3/';
    }
    async getMovie(id) {
        // Send a GET request to the specified endpoint
        return this.get(`movie/${encodeURIComponent(id)}/?api_key=84c85237fccfe25218451c4279b3de1a`);
    }
    async getNowPlayingMovies(){
        const data =  await this.get(`movie/now_playing/?api_key=84c85237fccfe25218451c4279b3de1a`);
        return data.results;
        // return [
        //     {
        //         "id": "1",
        //         "title": "movie1",
        //         "overview": "overview1"
        //     },
        //     {
        //         "id": "2",
        //         "title": "movie2",
        //         "overview": "overview2"
        //     }
        // ]
    }
} 
