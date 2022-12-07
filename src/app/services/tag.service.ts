import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from '../shared/baseURL';
import { Tag } from '../shared/tag';
import { lastValueFrom } from 'rxjs';
import { AuthService } from '../security/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  list(): Promise<Tag[]> {
    const httpOptions = {
      headers: new HttpHeaders(this.authService.getAuthorizationHeader())
    };
    return lastValueFrom(this.http.get<Tag[]>(baseURL + '/tags', httpOptions));
  }

  save(tag: Tag): Promise<Tag> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    let promise: Promise<Tag> = lastValueFrom( this.http.post<Tag>(baseURL + '/tags', tag, httpOptions) );
    return promise;
  }
}
