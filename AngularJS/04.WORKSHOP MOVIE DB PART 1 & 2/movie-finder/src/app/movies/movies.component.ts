import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/Movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  popularMovies: Array<Movie>;
  inTheaterMovies: Array<Movie>;
  popularKidMovies: Array<Movie>;
  bestDramaMovies: Array<Movie>;
  mSub: Subscription;
  message: null;

  constructor(private moviesService: MovieService) { }

  ngOnInit() {
    this.mSub = this.moviesService.getPopularMovies().subscribe(data => {
      this.popularMovies = data;
    })
    this.moviesService.getInTheaterMovies().subscribe(data => {
      this.inTheaterMovies = data;
    })
    this.moviesService.getPopularKidsMovies().subscribe(data => {
      this.popularKidMovies = data;
    })
    this.moviesService.getBestDramaMovies().subscribe(data => {
      this.bestDramaMovies = data;
    })
  }

  ngOnDestroy() {
    this.mSub.unsubscribe();
  }
}
