// src/app/your-http-client.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YourHttpClientService {
  constructor(private http: HttpClient) {}

  getPercentageChange(): Observable<any> {
    // Implement your HTTP logic here
    // Return an Observable with the response
    return this.http.get('your-url-here');
  }
}
