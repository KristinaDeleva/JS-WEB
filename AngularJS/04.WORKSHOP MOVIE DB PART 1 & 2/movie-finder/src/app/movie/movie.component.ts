import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input('movie')
  movie: Movie;
  imagePath: string;
  @Output('')
  clickBtnEmit: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
    //console.log(this.movie.poster_path + 'ok from child');
    this.imagePath = 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path;
  }

  // clickButton() {
  //   //console.log('button with id - ' + this.movie.id);
  //   this.clickBtnEmit.emit(this.movie.id);
  // }

}
