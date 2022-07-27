import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() display: boolean = true;
  @Output() displayChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.displayChange.emit(this.display);
  }
}
