import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showSidebar: boolean = false;
  routerOutletGrid: any[] = [];
  sidebarGrid: any[] = [];
  title = 'foro11-tickets';
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.onToggleSidebar();
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  showTopbar() {
    return this.router.url !== '/login';
  }

  onToggleSidebar() {
    if (this.showSidebar) {
      this.sidebarGrid = [
        'lg:col-2',
        'md:col-3',
      ];
      this.routerOutletGrid = [
        'col-12',
        'lg:col-10',
        'md:col-9'
      ];
    
    } else {
      this.routerOutletGrid = [
        'col-12'
      ]  
    }
  }
}
