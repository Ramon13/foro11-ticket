import { Component, OnInit } from '@angular/core';
import { ITicket} from '../../tickets';
import { TicketsService } from '../../tickets.service';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {
  tickets: ITicket[] | undefined;

  constructor(private ticketService: TicketsService) { }
  
  ngOnInit(): void {
    this.tickets = this.ticketService.getAll();  
  }

}
