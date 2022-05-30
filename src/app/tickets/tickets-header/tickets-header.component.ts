import { Component, OnInit } from '@angular/core';
import { STATUS } from '../../tickets';
import { TicketsService } from '../../tickets.service';

@Component({
  selector: 'app-tickets-header',
  templateUrl: './tickets-header.component.html',
  styleUrls: ['./tickets-header.component.css']
})
export class TicketsHeaderComponent implements OnInit {

  constructor(private ticketsService: TicketsService) { }

  ngOnInit(): void {
  }
}
