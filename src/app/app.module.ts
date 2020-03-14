import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodySearchComponent } from './components/body-search/body-search.component';
import { BodyTreatmentsComponent } from './components/body-treatments/body-treatments.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MySteticServicesComponent } from './components/my-stetic-services/my-stetic-services.component';
import { TherapistInfoComponent } from './components/therapist-info/therapist-info.component';
import { Error404Component } from './components/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodySearchComponent,
    BodyTreatmentsComponent,
    LoginComponent,
    HomeComponent,
    MySteticServicesComponent,
    TherapistInfoComponent,
    Error404Component
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
