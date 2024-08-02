import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

import { addDoc, collection, Firestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class DialogAddUserComponent {
  dialogRef = inject(MatDialogRef<DialogAddUserComponent>);


  firestore: Firestore = inject(Firestore);


  user = new User();
  birthDate = new Date();

  closeDialog() {
    this.dialogRef.close();
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.saveToDatabase('users', this.user.toJSON());
    this.closeDialog();
  }

  saveToDatabase(collectionName: string, json: any) {
    addDoc(collection(this.firestore, collectionName), json);
  }

}
