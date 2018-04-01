import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { } from '@types/googlemaps';

import { CountryService } from '../country.service';

@Component({
  selector: 'country-show',
  templateUrl: './country-show.component.html',
  styleUrls: ['./country-show.component.css']
})

export class CountryShowComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  country: any = {};

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCountry();

    // load google map
    const mapProp = {
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  // void is a bit like the opposite of any (meaning no type at all), commonly used on functions that do not return anything
  getCountry(): void {
    const code = this.route.snapshot.paramMap.get('code');
    this.countryService.getCountry(code)
        .subscribe((country: any) => {
          this.country = country;
          // set map center with country location
          this.map.setCenter({
            lat: country.latlng[0],
            lng: country.latlng[1]
          })
        });
  }

  goBack(): void {
    this.location.back();
  }

}
