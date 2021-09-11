import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CreatComponent } from './Components/creat/creat.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './Components/edit/edit.component';
import { DetailsComponent } from './Components/details/details.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { from } from 'rxjs';
import { CommonModule } from '@angular/common';  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatComponent,
    EditComponent,
    DetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
