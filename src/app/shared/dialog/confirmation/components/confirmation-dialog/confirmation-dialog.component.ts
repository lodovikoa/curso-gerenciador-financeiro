import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardContent } from "@angular/material/card";
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { DialogData } from '../../interfaces/dialog-data';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirmation-dialog',
  imports: [MatButtonModule, MatDialogTitle, MatCardContent, MatDialogActions, MatDialogClose],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationDialogComponent {

  readonly dialogRef = inject(MatDialogRef<ConfirmationDialogComponent>);
  readonly dialogData = inject<DialogData>(MAT_DIALOG_DATA);

}
