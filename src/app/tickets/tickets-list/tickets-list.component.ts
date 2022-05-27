import { Component, OnInit } from '@angular/core';
import { ITicket, tickets} from '../../tickets';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {
  tickets: ITicket[] = tickets;

  constructor() { }

  ngOnInit(): void {
  }

}
