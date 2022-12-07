import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ThemeService, Themes } from '../theme/theme.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Output() togglingSidebar = new EventEmitter();
  theme: boolean = true;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.togglingSidebar.emit();
  }

  switchTheme() {
    if (this.theme) {
      this.themeService.switchTheme(Themes.light);
    
    } else {
      this.themeService.switchTheme(Themes.dark);
    }

    this.theme = !this.theme;
  }
}
