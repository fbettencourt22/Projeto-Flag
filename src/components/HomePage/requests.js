const API_KEY = "f4fc37c9eb4f9a0dfa29597986b6ff8b";

const requests = {
  fetchTrending: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchNetflixOrigianals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
