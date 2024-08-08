import { Component, OnInit } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'simple-crm';

  ngOnInit(): void {
    this.sideNavSelect('dashboard');
  }

  sideNavSelect(selection: string) {
    if (typeof document !== 'undefined') {
      let itemDashboard = document.getElementById('sidenav-dashboard');
      let itemClients = document.getElementById('sidenav-clients');
      let itemSettings = document.getElementById('sidenav-settings');
      let itemLogout = document.getElementById('sidenav-logout');

      if (selection == 'dashboard') {
        itemDashboard?.classList.add('select-dashboard');
        itemClients?.classList.remove('select-clients');
        itemSettings?.classList.remove('select-settings');
        itemLogout?.classList.remove('select-logout');
      } else if (selection == 'clients') {
        itemClients?.classList.add('select-clients');
        itemDashboard?.classList.remove('select-dashboard');
        itemSettings?.classList.remove('select-settings');
        itemLogout?.classList.remove('select-logout');
      } else if (selection == 'settings') {
        itemSettings?.classList.add('select-settings');
        itemDashboard?.classList.remove('select-dashboard');
        itemClients?.classList.remove('select-clients');
        itemLogout?.classList.remove('select-logout');
      } else if (selection == 'logout') {
        itemLogout?.classList.add('select-logout');
        itemDashboard?.classList.remove('select-dashboard');
        itemClients?.classList.remove('select-clients');
        itemSettings?.classList.remove('select-settings');
      } else {
        itemDashboard?.classList.remove('select-dashboard');
        itemClients?.classList.remove('select-clients');
        itemSettings?.classList.remove('select-settings');
        itemLogout?.classList.remove('select-logout');
      }
    }
  }

}
