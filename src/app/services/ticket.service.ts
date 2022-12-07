import { Injectable, Inject } from '@angular/core';
import { Comment, Ticket, TicketPage } from '../shared/ticket';
import { baseURL } from '../shared/baseURL';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { AuthService } from '../security/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  list(): Promise<TicketPage> {
    const httpOptions = {
      headers: new HttpHeaders(this.authService.getAuthorizationHeader())
    };
    return lastValueFrom( this.http.get<TicketPage>(baseURL + '/tickets', httpOptions));
  }

  filter(property: string, value: string): Promise<TicketPage> {
    if (value != '')
      return lastValueFrom( this.http.get<TicketPage>(`${baseURL}/tickets?${property}=${value}`) );
    else
      return this.list();
  }

  search(key:string): Promise<TicketPage> {
    return lastValueFrom( this.http.get<TicketPage>(`${baseURL}/tickets?title=${key}`) );
  }

  find(id: number): Promise<Ticket> {
    const httpOptions = {
      headers: new HttpHeaders(this.authService.getAuthorizationHeader())
    };
    return lastValueFrom( this.http.get<Ticket>(`${baseURL}/tickets/${id}`, httpOptions) );
  }

  save(formData: FormData) {
    const httpOptions = {
      headers: new HttpHeaders(this.authService.getAuthorizationHeader())
    };
    httpOptions.headers.append('Content-Type', 'multipart/form-data')
    
    let promise = lastValueFrom( this.http.post(baseURL + '/tickets', formData) );
    return promise;
  }

  listComments(ticketId: number): Promise<Comment[]> {
    const httpOptions = {
      headers: new HttpHeaders(this.authService.getAuthorizationHeader())
    };
    return lastValueFrom( this.http.get<Comment[]>(`${baseURL}/tickets/${ticketId}/comments`) );
  }
}
