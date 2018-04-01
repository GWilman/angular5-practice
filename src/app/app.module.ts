import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { D3Component } from './d3/d3.component';
import { HeroComponent } from './hero/hero.component';
import { CountryShowComponent } from './country-show/country-show.component';

// Services
import { CountryService } from './country.service';
import { D3Service } from 'd3-ng2-service';

// Router
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    D3Component,
    HeroComponent,
    CountryShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CountryService, D3Service],
  bootstrap: [AppComponent]
})

export class AppModule { }
