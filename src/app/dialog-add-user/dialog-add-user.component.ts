import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { addDoc, collection, CollectionReference, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
=======
>>>>>>> 9b49298 (install firebase)


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

<<<<<<< HEAD
  user = new User();
  birthDate = new Date();
=======
  dialogRef = inject(MatDialogRef<DialogAddUserComponent>);
>>>>>>> 9b49298 (install firebase)

  user = new User();
  birthDate = new Date();

  closeDialog() {
    this.dialogRef.close();
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('User:', this.user);
<<<<<<< HEAD

    addDoc(collection(this.firestore, 'users'), this.user.toJSON());

=======
>>>>>>> 9b49298 (install firebase)
    this.closeDialog();
  }

}
