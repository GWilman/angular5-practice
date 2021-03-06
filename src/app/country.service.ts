import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  getCountry(code) {
    return this.http.get(`https://restcountries.eu/rest/v2/alpha/${code}`);
  }

  filterName(countries, countryName) {
    return countries.filter(country => ~country.name.toLowerCase().indexOf(countryName.toLowerCase()));
    // tilde converts a -1(truthy) to a 0(falsey) - so can be used instead of >= 0 in this case.
  }

  filterFirstChar(countries, char) {
    return countries.filter(country => country.name[0] === char);
  }

}
