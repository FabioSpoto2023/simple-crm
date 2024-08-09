import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-crm';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.setNavSelection(event.url);
      }
    })
  }

  setNavSelection(url: string) {
    if (typeof document !== 'undefined') {
      let itemDashboard = document.getElementById('sidenav-dashboard');
      let itemClients = document.getElementById('sidenav-clients');
      let itemSettings = document.getElementById('sidenav-settings');
      let itemLogout = document.getElementById('sidenav-logout');

      if (url == '/') {
        itemDashboard?.classList.add('select-dashboard');
        itemClients?.classList.remove('select-clients');
        itemSettings?.classList.remove('select-settings');
        itemLogout?.classList.remove('select-logout');
      } else if (url == '/clients') {
        itemClients?.classList.add('select-clients');
        itemDashboard?.classList.remove('select-dashboard');
        itemSettings?.classList.remove('select-settings');
        itemLogout?.classList.remove('select-logout');
      } else if (url == '/settings') {
        itemSettings?.classList.add('select-settings');
        itemDashboard?.classList.remove('select-dashboard');
        itemClients?.classList.remove('select-clients');
        itemLogout?.classList.remove('select-logout');
      } else if (url == '/logout') {
        itemLogout?.classList.add('select-logout');
        itemDashboard?.classList.remove('select-dashboard');
        itemClients?.classList.remove('select-clients');
        itemSettings?.classList.remove('select-settings');
      }
    }
  }

}
