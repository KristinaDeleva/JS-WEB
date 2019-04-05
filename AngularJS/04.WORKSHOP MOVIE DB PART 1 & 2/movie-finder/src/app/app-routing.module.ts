import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SingleMovieResolverService } from './services/resolvers/single-movie-resolver.service';
import { MovieSearchComponent } from './movie-search/movie-search.component';

const routes: Routes = [] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies'
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movies/search',
    component: MovieSearchComponent,
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
    resolve: { singleMovie: SingleMovieResolverService }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
