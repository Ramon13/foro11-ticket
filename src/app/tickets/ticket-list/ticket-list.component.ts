import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TicketService } from 'src/app/services/ticket.service';
import { statusValues } from 'src/app/shared/status';
import { priorityValues } from 'src/app/shared/priority';
import { Ticket, TicketPage } from '../../shared/ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  pageSize: number = 0;
  totalElements: number = 0;
  tickets: Ticket[] | null = null;
  searchKey: string = '';
  statusMenu: MenuItem[] = [];

  constructor(private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.statusMenu = [
      {
        label: 'Status', 
        icon: 'pi pi-filter', 
        items: Array.from(statusValues, status => {
          return {
            label: status.value, 
            command: (event) => this.filterByStatus(status.apiValue)
          }
        })
      },
      {
        label: 'Priority', 
        icon: 'pi pi-filter',
        items: Array.from(priorityValues, priority => {
          return {
            label: priority,
            command: (event) => this.filterByPriority(priority)
          }
        })
      }
    ];

    this.displayTicketsOrElseThrow(this.ticketService.list());
  }

  getTicketSeverity(priority: string) {
    if (priority === 'HIGH') return 'danger';
    else if (priority === 'NORMAL') return 'warning'
    return 'info';
  }

  filterByStatus(status: string) {
    this.displayTicketsOrElseThrow( this.ticketService.filter('status', status) );
  }

  filterByPriority(priority: string) {
    this.displayTicketsOrElseThrow( this.ticketService.filter('priority', priority) )
  }

  search() {
    this.displayTicketsOrElseThrow( this.ticketService.search(this.searchKey) );
  }

  displayTicketsOrElseThrow(page: Promise<TicketPage>) {
    this.tickets = null;

    page.then(ticketsPage => {
      this.pageSize = ticketsPage.size;
      this.totalElements = ticketsPage.totalElements;
      this.tickets = ticketsPage.content;
    })
      .catch(error => console.log(error));
  }

  paginate(event: any) {
    this.displayTicketsOrElseThrow( this.ticketService.filter('page', event.page) );
  }
}
