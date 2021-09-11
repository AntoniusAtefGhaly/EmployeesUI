import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatComponent } from './Components/creat/creat.component';
import { DetailsComponent } from './Components/details/details.component';
import { EditComponent } from './Components/edit/edit.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'edit/:id', component: EditComponent },
  { path: 'details/:id', component: DetailsComponent},
  { path: 'add', component: CreatComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
