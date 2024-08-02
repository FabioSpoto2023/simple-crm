import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';


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

  user = new User();
  birthDate = new Date();

  closeDialog() {
    this.dialogRef.close();
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('User:', this.user);
    this.closeDialog();
  }

}
