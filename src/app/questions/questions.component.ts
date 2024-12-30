import { Component } from '@angular/core';
import { NgIf , NgFor } from '@angular/common';
import { ConfirmDialogComponent } from '../../shared/components/confirmation_Dialog/confirm-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../../shared/components/worker_Dialog/worker-dialog.component';
import { questions } from '../../data/question';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NgIf , NgFor  , MatDialogModule , ConfirmDialogComponent , UpdateDialogComponent],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  showTableView = false; // Toggle between list view and table view
  items = questions;
  setListView(): void {
    this.showTableView = false;
  }

  setTableView(): void {
    this.showTableView = true;
  }
  /**
    @desc For Openning Dialog For Making Two Main Function For 
    1-  Upadting Question 
    2-  Deleting Question 
  */

  constructor(public dialog: MatDialog) {}
  openUpdateDialog(item: any): void {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: { ...item }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log({result});
        // Update the item in the items array
        const index = this.items.findIndex(i => i.id === result.id);
        if (index !== -1) {
          this.items[index] = result;
          console.log('Item updated:', result);
        }
      }
    });
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Item deleted');
        // Call your delete function here
      } else {
        console.log('Deletion canceled');
      }
    });
  }
}
