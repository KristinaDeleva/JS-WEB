import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import Movie from '../models/Movie';
import MovieDetails from '../models/MovieDetails';

const BASE_URL = 'https://api.themoviedb.org/3/';
const IN_THEATERS = 'discover/movie?primary_release_date.gte=2019-03-01&primary_release_date.lte=2019-04-30';
const POPULAR = 'discover/movie?sort_by=popularity.desc';
const KIDS = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
const BEST_DRAMA = 'discover/movie?with_genres=18&primary_release_year=2019';
const API_KEY = '&api_key=d9e38b7bf15f58204e4b0bad9ab92217';
const API_KEY_ALT = '?api_key=d9e38b7bf15f58204e4b0bad9ab92217';


@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) {

  }

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + POPULAR + API_KEY)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      );
  }

  getInTheaterMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + IN_THEATERS + API_KEY)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      );
  }

  getPopularKidsMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + KIDS + API_KEY)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      );
  }

  getBestDramaMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + BEST_DRAMA + API_KEY)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      );
  }

  getMovieById(id:string) {
    return this.http.get<MovieDetails>(BASE_URL + `movie/${id}` + API_KEY_ALT);
  }

  searchMovie(query: string) {
    return this.http.get<Array<Movie>>(BASE_URL + 'search/movie' + API_KEY_ALT + `&query=${query}`);
  }
}
