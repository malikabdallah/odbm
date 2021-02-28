import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index/index.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
const appRoutes: Routes = [

  { path: '', component: IndexComponent },
  { path: 'details', component: DetailsComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
