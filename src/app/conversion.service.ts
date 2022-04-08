import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConversionService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getlatestData(data = 'PKR') {
    return this.http.get<any>(
      'https://v6.exchangerate-api.com/v6/82573de8447915c58839836a/latest/' +
        data
    );
  }
}
