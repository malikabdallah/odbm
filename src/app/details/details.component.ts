import { Component, OnInit } from '@angular/core';
import { Film } from '../model/Film';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public film:Film;
  public chemin:string;
  constructor() { }

  ngOnInit(): void {
    this.film=JSON.parse(localStorage.getItem("film"));
    this.chemin=this.film.Poster;
  }

}
