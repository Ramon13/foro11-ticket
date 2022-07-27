import { NgForm } from '@angular/forms'
import { Component, OnInit } from '@angular/core';

export class Ticket {
  title: string = "";
  priority: string = "";
}

@Component({
  selector: 'app-ticket-register',
  templateUrl: './ticket-register.component.html',
  styleUrls: ['./ticket-register.component.css']
})
export class TicketRegisterComponent implements OnInit {

  priorityList: any[] = [];
  tags: any[] = [];
  filteredTags: any[] = [];
  selectedTags: Set<string> = new Set();
  ticket: Ticket = new Ticket();

  constructor() { }

  ngOnInit(): void {
    this.priorityList = [
      {name: "High", alias: "H"},
      {name: "Normal", alias: "N"},
      {name: "Low", alias: "L"}
    ];

    this.tags = [
      {name: "Aker"},
      {name: "Firewall"},
      {name: "Printer"},
      {name: "Windows"},
      {name: "Rede"},
      {name: "Access Point"}
    ];
  }

  filterTags(event: any) {
    let query = event.query;

    let filtered: any[] = [
      {name: `Criar etiqueta: "${query}"`}
    ];

    for (let tag of this.tags) {
      if (tag.name.toLowerCase().indexOf(query.toLowerCase()) == 0) filtered.push(tag);
    }

    this.filteredTags = filtered;
  }

  selectTag(event: any) {
    this.selectedTags.add(event.name);
  }

  save(formData: NgForm) {
    console.log(formData);
  }
}