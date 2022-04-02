import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiKey = '7f8b9217efee313ed22792a8bfc17f2d';

  constructor(private http: HttpClient) { }


  search(text: string, page: number = 1, perPage: number = 10) {
    const url= `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.apiKey}&text=${text}&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`;
    return this.http.get(url);
  }


  getInfo(photoId: string) {
    let url= `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${this.apiKey}&photo_id=${photoId}&format=json&nojsoncallback=1`;
    return this.http.get(url);
  }
}
