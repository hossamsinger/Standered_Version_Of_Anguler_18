import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { questions } from '../../../data/question';


@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './preview-dialog.component.html',
  styleUrl: './preview-dialog.component.scss'
})
export class PreviewDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PreviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  items = questions;
  close(): void {
    this.dialogRef.close();
  }
  getCorrectAnswer(choices: string[], correctAnswerIndex?: number): string {
    if (correctAnswerIndex === undefined || correctAnswerIndex < 0 || correctAnswerIndex >= choices.length) {
      return 'N/A'; // Return fallback if index is invalid or undefined
    }
    return choices[correctAnswerIndex];
  }

}

