import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { MaterialModule } from '../material/material.module';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class DialogAddUserComponent {

  user = new User();
  dialogRef = inject(MatDialogRef<DialogAddUserComponent>);

  closeDialog() {
    this.dialogRef.close();
  }

  saveUser() {
    console.log('User:', this.user);
  }

}
