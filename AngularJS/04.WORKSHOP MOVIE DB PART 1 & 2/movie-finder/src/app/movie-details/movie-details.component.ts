import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Params } from '@angular/router';
import MovieDetails from '../models/MovieDetails';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieDetails;
  movieGenres: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.movie = this.route.snapshot.data['singleMovie'];
    this.movieGenres = this.movie.genres
      .map(el => el['name'])
      .join(' ');

    //if id change dynamic data
    //   this.route.params
    //     .subscribe((params: Params) => {
    //       this.id = params['id'];
    //     })

    //   this.moviesService
    //     .getMovieById(this.id)
    //     .subscribe((data) => {
    //       this.movie = data;
    //       this.movieGenres = this.movie.genres
    //         .map(el => el['name'])
    //         .join(' ');
    //     })
    // }

  }
}
