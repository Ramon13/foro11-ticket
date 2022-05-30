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
    this.route.queryParams.subscribe(params => {
      const status = params['status'];
      switch(status) {
        case STATUS.open:
          this.tickets = this.ticketsService.getAllOpen();
          this.title = STATUS.open;
          break;          
        case STATUS.finished:
          this.tickets = this.ticketsService.getAllFinished();
          this.title = STATUS.finished
          break;
        case STATUS.notListed:
          this.tickets = this.ticketsService.getAllNotListed();
          this.title = STATUS.notListed;
          break;
        default:
          this.tickets = this.ticketsService.getAll();
          break;
      }
    });
  }
}
