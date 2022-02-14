import { RESTDataSource } from 'apollo-datasource-rest';

export class MovieAPI extends RESTDataSource{
    constructor(){
        super();
        // base url of the API
        this.baseURL = 'https://api.themoviedb.org/3/';
    }
    async getMovie(id) {
        // Send a GET request to the specified endpoint
        return this.get(`movie/${id}?api_key=84c85237fccfe25218451c4279b3de1a`);
    }
    async  getNowPlayingMovies(args){
        const data =  await this.get(`movie/now_playing/?api_key=84c85237fccfe25218451c4279b3de1a`,{
           per_page: args.limit
        });
        
        return data.results;
    }
} 

