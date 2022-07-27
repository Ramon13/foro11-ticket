import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Tag} from './tickets';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  
  private tagsUrl: string = "http://localhost:8080/tags";
  
  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  }
   
  constructor(
    private http: HttpClient
  ) { }
   
  getAll(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.tagsUrl, this.httpOptions);
  }
}
