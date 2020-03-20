import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TherapistInfoComponent } from './components/therapist-info/therapist-info.component';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';



const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'therapist/:therapistId', component: TherapistInfoComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}