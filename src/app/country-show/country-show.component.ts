import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CountryService } from '../country.service';

@Component({
  selector: 'country-show',
  templateUrl: './country-show.component.html',
  styleUrls: ['./country-show.component.css']
})
export class CountryShowComponent implements OnInit {

  country: {} = {};

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCountry();
  }

  // void is a bit like the opposite of any (meaning no type at all), commonly used on functions that do not return anything
  getCountry(): void {
    const code = this.route.snapshot.paramMap.get('code');
    this.countryService.getCountry(code)
        .subscribe(country => {
          this.country = country;
        });
  }

  goBack(): void {
    this.location.back();
  }

}
