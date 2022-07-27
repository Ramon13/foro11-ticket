import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  display: boolean = true; 
  routerOutletGrid: any[] = [];
  sidebarGrid: any[] = [];
  title = 'foro11-tickets';

  ngOnInit(): void {
    
  }

  toggleSidebar() {
    this.display = !this.display; 
  }

  onToggleSidebar() {
    if (this.display) {
      this.sidebarGrid = [
        'lg:col-2',
        'md:col-3',
      ];
      this.routerOutletGrid = [
        'col-12',
        'lg:col-10',
        'md:col-9'
      ];
    
    }else {
      this.routerOutletGrid = [
      'col-12'
      ]  
    }
  }
}
