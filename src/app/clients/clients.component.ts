import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../material/material.module';
import { collection, Firestore, onSnapshot, orderBy, query } from '@angular/fire/firestore';
import { CommonModule, NgFor } from '@angular/common';
import { DialogAddClientComponent } from '../dialog-add-client/dialog-add-client.component';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
  standalone: true,
  imports: [MaterialModule, NgFor, CommonModule],
})


export class ClientsComponent implements OnInit, OnDestroy {
  firestore = inject(Firestore);
  dialog = inject(MatDialog);
  users: any = [];

  unsubUsers: any;

  ngOnInit(): void {
    const q = query(collection(this.firestore, 'users'), orderBy('firstName', 'desc'));
    this.unsubUsers = onSnapshot(q, (elements) => {
      this.users = [];
      elements.forEach(element => {
        this.users.push(element.data());
      })
    });
  }

  ngOnDestroy(): void {
    this.unsubUsers();
  }

  openDialog() {
    this.dialog.open(DialogAddClientComponent, {
      autoFocus: false
    });
  }
}