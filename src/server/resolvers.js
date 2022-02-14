// import { movieAPI } from "./datasources.js";

export const resolvers = {
  Query:
    {
      // Query resolver defined to get a specific movie based on movie_id passed as query param
      movie: async (_, args, { dataSources }) => {
        return dataSources.movieAPI.getMovie(args.id);
      },
      // Query resolver defined to get a list of all now_playing_movies
      nowPlayingMovies: async (_, args, { dataSources },info) => {
        return dataSources.movieAPI.getNowPlayingMovies(args);
      }
    }
};

// export.module =  resolvers;