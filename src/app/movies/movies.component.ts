import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  moviesList:any[]=[];

  imgPrefix : string='https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService:MoviesService) {
    _MoviesService.getTrending('movie').subscribe((data)=>{

      this.moviesList = data.results;

    })
   }

  ngOnInit(): void {
  }

}
