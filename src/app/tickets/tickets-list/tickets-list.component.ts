import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITicket, STATUS } from '../../tickets';
import { TicketsService } from '../../tickets.service';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit{
  tickets: ITicket[] | undefined;
  title: string | undefined;

  constructor(
    private ticketsService: TicketsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.showByStatus();
  }
  
  removeTicket(ticketId: Number) {
    this.ticketsService.removeTicket(ticketId);
    this.showByStatus();
  }
  
  showByStatus() {
    this.route.queryParams.subscribe(params => {
      const status = params['status'];
      switch(status) {
        
        case STATUS.open:
          break;          
        
        case STATUS.finished:
          break;
        
        case STATUS.notListed:
          break;
        
        default:
          this.ticketsService.getAll()
            .subscribe(tickets => this.tickets = tickets);
          break;
      }
    });
  }
}
