import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../model/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }


  getFilm(apiKey:string,title:string):Observable<Film>{
    return this.http.get<Film>('https://www.omdbapi.com/?t='+title+'&apiKey='+apiKey);
  }
}
