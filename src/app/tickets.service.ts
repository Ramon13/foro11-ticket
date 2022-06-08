import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITicket, ITicketComment, STATUS} from './tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  tickets: ITicket[] = [];
  
  private ticketsUrl = 'http://localhost:8080/tickets';
  
  httpOptions = {
    headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
  }
    
  constructor(
    private http: HttpClient
  ) { }
  
  addTicket(ticket: ITicket): Observable<any> {
    console.log(ticket);
    return this.http.post<ITicket>(this.ticketsUrl, ticket, this.httpOptions);
  }
  
  removeTicket(ticketId: Number) {
    this.tickets = this.tickets.filter(ticket => ticket.id != ticketId);
    console.log(this.tickets);
  }
  
  getAll(): Observable<ITicket[]> {
    return this.http.get<ITicket[]>(this.ticketsUrl, this.httpOptions);
  }
  
  getAllOpen() {
    //return this.tickets.filter(ticket => ticket.status == STATUS.open);
  }
  
  getAllNotListed() {
    //return ticketsDB.filter(ticket => ticket.status == STATUS.notListed);
  }
  
  getAllFinished() {
    //return this.tickets.filter(ticket => ticket.status == STATUS.finished);
  }
  
  getTicket(ticketId: number) {
    const url = `${this.ticketsUrl}/${ticketId}`;
    return this.http.get<ITicket>(url, this.httpOptions);
  }
  
  addComment(ticketId:number, message: string) {
    const comment: ITicketComment = {
      message: message,
      user: "loggedUser",
      createdAt: new Date()
    };
    
    //this.getTicket(ticketId)?.comments?.push(comment);
  }
  
  countTickets() {
    return this.tickets.length;
  }
  
  countNotListed() {
    //return this.getAllNotListed().length;
  }
  
  countOpen() {
    //return this.getAllOpen().length;
  }
  
  countFinished() {
    //return this.getAllFinished().length;
  }
}
