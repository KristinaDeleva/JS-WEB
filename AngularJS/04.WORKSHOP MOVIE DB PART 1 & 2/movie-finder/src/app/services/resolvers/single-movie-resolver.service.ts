import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import MovieDetails from 'src/app/models/MovieDetails';
import { MovieService } from '../movie.service';

@Injectable({
  providedIn: 'root'
})
export class SingleMovieResolverService implements Resolve<MovieDetails>{
  constructor(private movieService: MovieService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'];
    return this.movieService.getMovieById(id);
  }
}
