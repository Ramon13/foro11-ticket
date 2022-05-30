import { Injectable } from '@angular/core';
import { ITicket, ITicketComment, STATUS, ticketsDB} from './tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  tickets: ITicket[] = ticketsDB;
  
  constructor() { }
  
  getAll() {
    return this.tickets;
  }
  
  getAllOpen() {
    return this.tickets.filter(ticket => ticket.status == STATUS.open);
  }
  
  getAllNotListed() {
    return ticketsDB.filter(ticket => ticket.status == STATUS.notListed);
  }
  
  getAllFinished() {
    return this.tickets.filter(ticket => ticket.status == STATUS.finished);
  }
  
  getTicket(ticketId: number) {
    return this.tickets.find(ticket => ticket.id == ticketId);
  }
  
  addComment(ticketId:number, message: string) {
    const comment: ITicketComment = {
      message: message,
      user: "loggedUser",
      createdAt: new Date()
    };
    
    this.getTicket(ticketId)?.comments?.push(comment);
  }
}
