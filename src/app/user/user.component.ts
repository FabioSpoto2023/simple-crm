import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogAddUserComponent, {
      autoFocus: false
    });
  }

}
