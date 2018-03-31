import { Component, OnInit } from '@angular/core';

import { CountryService } from '../country.service';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})

export class CountriesComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  countries: {} = [];
  filtered: {} = [];
  alphabet: {} = [];
  countryName: string = '';
  selectedChar: string = '';

  ngOnInit() {
    this.getCountries();
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }

  // void is a bit like the opposite of any (meaning no type at all), commonly used on functions that do not return anything
  getCountries(): void {
    this.countryService.getCountries()
        .subscribe(countries => {
          this.countries = countries;
          this.filtered = countries;
        });
  }

  filterName(countryName: string): void {
    this.selectedChar = '';
    this.filtered = this.countryService.filterName(this.countries, countryName);
  }

  filterFirstChar(char: string): void {
    this.countryName = '';
    this.selectedChar = char;
    this.filtered = this.countryService.filterFirstChar(this.countries, char);
  }

}
