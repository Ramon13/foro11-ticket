import { Injectable } from '@angular/core';
import { ITicket, tickets} from './tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  tickets: ITicket[] = tickets;
  
  constructor() { }
  
  getAll() {
    return this.tickets;
  }
  
  getTicket(ticketId: number) {
    return this.tickets.find(ticket => ticket.id == ticketId);
  }
}
