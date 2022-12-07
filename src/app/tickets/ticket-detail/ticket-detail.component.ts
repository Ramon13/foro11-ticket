import { Component, OnInit, Inject } from '@angular/core';
import { Comment, Ticket } from 'src/app/shared/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {
  ticket?: Ticket;
  comments: Comment[] = [];
  pageComment: string = '';
  ticketId?: number;
  
  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
    @Inject('baseURL') public baseURL: string 
  ) { }

  ngOnInit(): void {
    this.ticketId = Number(this.route.snapshot.paramMap.get('id'));

    this.getTicket();
    this.getComments();
  }

  addComment() {
	  const routeParams = this.route.snapshot.paramMap;
    const ticketId = Number(routeParams.get('id'));
    //this.ticketService.addComment(ticketId, this.pageComment);
  }
  
  getTicket() {
    if (this.ticketId) {
      this.ticketService.find(this.ticketId)
          .then(ticket => this.ticket = ticket);
    }
  } 
  
  getComments() {
    if (this.ticketId) {
      this.ticketService.listComments(this.ticketId)
        .then(comments => this.comments = comments);
    }
  }
}
