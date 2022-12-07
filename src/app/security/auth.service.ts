import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Token } from '@angular/compiler';

const CLIENT_ID = 'foro11ticket-client';
const OAUTH_TOKEN_URL = 'http://auth.foro11.local:8081/oauth2/token';
const OAUTH_AUTH_URL = 'http://auth.foro11.local:8081/oauth2/authorize';
const REDIRECT_URI = 'http://127.0.0.1:4200/authorized'
const OAUTH_CLIENT_AUTH = 'Zm9ybzExdGlja2V0LWNsaWVudDpzZWNyZXQ=';
const BEARER_TOKEN = 'bearer-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authorize() {
    window.location.href = `${OAUTH_AUTH_URL}?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=abc`;
  }

  getToken(authorization_code: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${OAUTH_CLIENT_AUTH}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    const body = `code=${authorization_code}&grant_type=authorization_code&redirect_uri=${REDIRECT_URI}`;

    let promise = lastValueFrom(this.http.post<any>(OAUTH_TOKEN_URL, body, httpOptions))
      .then(response => {
        return Promise.resolve(response.access_token);
      })
      .catch(response => {
        return Promise.reject(response);
      });

    return promise;
  }

  saveToLocalStorage(token: string) {
    localStorage.setItem(BEARER_TOKEN, token);
  }

  getTokenFromLocalStorage(): string | null {
    return localStorage.getItem(BEARER_TOKEN);
  }

  getAuthorizationHeader(): any {
    return {'Authorization': `Bearer ${this.getTokenFromLocalStorage()}`}
  }
}
