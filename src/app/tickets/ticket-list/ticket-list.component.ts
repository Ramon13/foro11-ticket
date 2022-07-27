import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tickets = [
      {
        title: "Lorem ípsum dolor amet",
        createdAt: new Date(),
        priority: 'H',
        tags: [
          {name: "tag0"},
          {name: "tag1"}
        ]
      },
      {
        title: "Lorem ípsum dolor amet",
        createdAt: new Date(),
        priority: 'N',
        tags: [
          {name: "tag0"},
          {name: "tag1"}
        ]
      },
      {
        title: "Lorem ípsum dolor amet",
        createdAt: new Date(),
        priority: 'L',
        tags: [
          {name: "tag0"},
          {name: "tag1"}
        ]
      }
    ];
  }

  getTicketSeverity(priority: string) {
    if (priority === 'H') return 'danger';
    else if (priority === 'N') return 'warning'
    return 'info';
  }
}
