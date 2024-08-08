import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dialog-add-client',
  templateUrl: './dialog-add-client.component.html',
  styleUrl: './dialog-add-client.component.scss',
  imports: [MaterialModule, FormsModule, CommonModule],
  providers: [provideNativeDateAdapter()],
  standalone: true
})
export class DialogAddClientComponent {
  dialogRef = inject(MatDialogRef<DialogAddClientComponent>);

  firestore: Firestore = inject(Firestore);

  user = new User();
  birthDate = new Date();
  loading: boolean = false;

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;
    this.saveToDatabase('users', this.user.toJSON())
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      })
  }

  saveToDatabase(collectionName: string, json: any) {
    return addDoc(collection(this.firestore, collectionName), json);
  }
}
