import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MaterialModule } from '../material/material.module';
import { collection, Firestore, limit, onSnapshot, orderBy, query } from '@angular/fire/firestore';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MaterialModule, NgFor, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnDestroy {

  firestore = inject(Firestore);
  dialog = inject(MatDialog);
  users: any = [];

  unsubUsers: any;


  constructor() {
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
    this.dialog.open(DialogAddUserComponent, {
      autoFocus: false
    });
  }

}
