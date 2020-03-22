import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MySteticServicesComponent } from './components/my-stetic-services/my-stetic-services.component';
import { TherapistInfoComponent } from './components/therapist-info/therapist-info.component';
import { Error404Component } from './components/error404/error404.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MySteticServicesComponent,
    TherapistInfoComponent,
    Error404Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
