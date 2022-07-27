import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  @Output() togglingSidebar = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.togglingSidebar.emit();
  }
}
