import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TherapistInfoComponent } from './components/therapist-info/therapist-info.component';
import { Error404Component } from './components/error404/error404.component';



const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'therapist/:therapistId', component: TherapistInfoComponent},
    {path: '404', component: Error404Component},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);