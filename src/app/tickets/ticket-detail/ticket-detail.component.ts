import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITicket } from '../../tickets';
import { TicketsService } from '../../tickets.service';
import { NotificationService } from '../../notification.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {
  ticket: ITicket | undefined;
  pageComment: string = '';
  
  constructor(
    private ticketService: TicketsService,
    private notificationService: NotificationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const ticketId = Number(routeParams.get('id'));
    this.ticket = this.ticketService.getTicket(ticketId);
  }

  addComment() {
	  const routeParams = this.route.snapshot.paramMap;
    const ticketId = Number(routeParams.get('id'));
    this.ticketService.addComment(ticketId, this.pageComment);
  }
}
