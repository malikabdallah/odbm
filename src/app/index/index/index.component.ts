import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Film } from '../../model/Film';
import { FilmService } from '../../service/film.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  userForm: FormGroup;
  film:Film;
  chemin:string;

  constructor(private formBuilder: FormBuilder,
    private FilmService:FilmService,
    private router:Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      apiKey: '',
      title: '',
     
    });
  }


  onSubmitForm() {
    const formValue = this.userForm.value;
    let title=formValue['title'];
    let apikey=formValue['apiKey'];
 
    this.FilmService.getFilm(apikey,title).subscribe(
      data=>{
        this.film=data;
        this.chemin=this.film.Poster;
      }
    )
    
  }


  showDetails(){

    localStorage.setItem("film",JSON.stringify(this.film));
    this.router.navigate(["details"]);
  }

}
