import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppoinmentsComponent } from './appoinments/appoinments.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '',   redirectTo: 'home', pathMatch: 'full' },
  {path: 'appoinment', component:AppoinmentsComponent },
  {path: 'home', component:HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
