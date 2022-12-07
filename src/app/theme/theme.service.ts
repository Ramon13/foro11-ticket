import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export const Themes = {
  light: 'bootstrap4-light-blue',
  dark: 'bootstrap4-dark-blue'
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  switchTheme(theme: string) {
    let themeLink = this.document.querySelector('#app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
    }
  }
}
