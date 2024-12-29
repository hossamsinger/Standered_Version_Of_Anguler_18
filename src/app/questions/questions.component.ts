import { Component } from '@angular/core';
import { NgIf , NgFor } from '@angular/common';
import { ConfirmDialogComponent } from '../../shared/components/confirmation_Dialog/confirm-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../../shared/components/worker_Dialog/worker-dialog.component';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NgIf , NgFor  , MatDialogModule , ConfirmDialogComponent , UpdateDialogComponent],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  showTableView = false; // Toggle between list view and table view

  items = [
    { "id": 1, "title": "What is the capital of France?", "category": "Geography", "level": 1, "progress": 45 },
    { "id": 2, "title": "Explain the theory of relativity.", "category": "Physics", "level": 5, "progress": 87 },
    { "id": 3, "title": "What is 2 + 2?", "category": "Mathematics", "level": 1, "progress": 15 },
    { "id": 4, "title": "Describe the process of photosynthesis.", "category": "Biology", "level": 3, "progress": 62 },
    { "id": 5, "title": "Who wrote 'Romeo and Juliet'?", "category": "Literature", "level": 2, "progress": 33 },
    { "id": 6, "title": "What is the formula for water?", "category": "Chemistry", "level": 1, "progress": 50 },
    { "id": 7, "title": "Define Newton’s Second Law.", "category": "Physics", "level": 4, "progress": 77 },
    { "id": 8, "title": "What are the three branches of government?", "category": "Civics", "level": 2, "progress": 25 },
    { "id": 9, "title": "Explain the concept of supply and demand.", "category": "Economics", "level": 3, "progress": 58 },
    { "id": 10, "title": "Translate 'Hola' from Spanish to English.", "category": "Language/Spanish", "level": 1, "progress": 12 },
    { "id": 11, "title": "What is the powerhouse of the cell?", "category": "Biology", "level": 2, "progress": 48 },
    { "id": 12, "title": "Define the Pythagorean theorem.", "category": "Mathematics/Geometry", "level": 3, "progress": 71 },
    { "id": 13, "title": "What is the boiling point of water in Celsius?", "category": "Physics", "level": 1, "progress": 20 },
    { "id": 14, "title": "Name a Shakespearean tragedy.", "category": "Literature", "level": 2, "progress": 36 },
    { "id": 15, "title": "Explain plate tectonics.", "category": "Geography/Geology", "level": 4, "progress": 82 },
    { "id": 16, "title": "What is the square root of 81?", "category": "Mathematics", "level": 2, "progress": 53 },
    { "id": 17, "title": "Describe the lifecycle of a butterfly.", "category": "Biology", "level": 1, "progress": 29 },
    { "id": 18, "title": "Who painted the Mona Lisa?", "category": "Art", "level": 2, "progress": 39 },
    { "id": 19, "title": "Define osmosis.", "category": "Biology/Chemistry", "level": 3, "progress": 68 },
    { "id": 20, "title": "What is the atomic number of Hydrogen?", "category": "Chemistry", "level": 1, "progress": 10 },
    { "id": 21, "title": "Describe the Great Wall of China.", "category": "History/Geography", "level": 2, "progress": 44 },
    { "id": 22, "title": "Explain the Big Bang Theory.", "category": "Physics/Cosmology", "level": 5, "progress": 92 },
    { "id": 23, "title": "What is the freezing point of water?", "category": "Physics", "level": 1, "progress": 17 },
    { "id": 24, "title": "What is the main theme of 'To Kill a Mockingbird'?", "category": "Literature", "level": 3, "progress": 60 },
    { "id": 25, "title": "What is the largest planet in our solar system?", "category": "Astronomy", "level": 2, "progress": 35 },
    { "id": 26, "title": "Define a renewable resource.", "category": "Environmental Science", "level": 1, "progress": 14 },
    { "id": 27, "title": "What is 7 times 8?", "category": "Mathematics", "level": 1, "progress": 9 },
    { "id": 28, "title": "Describe the Industrial Revolution.", "category": "History", "level": 4, "progress": 80 },
    { "id": 29, "title": "Explain the theory of evolution.", "category": "Biology", "level": 5, "progress": 94 },
    { "id": 30, "title": "What is the speed of light?", "category": "Physics", "level": 3, "progress": 65 },
    { "id": 31, "title": "What are the primary colors?", "category": "Art", "level": 1, "progress": 22 },
    { "id": 32, "title": "Name a novel by Charles Dickens.", "category": "Literature", "level": 2, "progress": 40 },
    { "id": 33, "title": "What is the primary function of roots in plants?", "category": "Biology", "level": 1, "progress": 27 },
    { "id": 34, "title": "What is the capital of Japan?", "category": "Geography", "level": 1, "progress": 11 },
    { "id": 35, "title": "Define gravitational force.", "category": "Physics", "level": 3, "progress": 74 },
    { "id": 36, "title": "What is the first element on the periodic table?", "category": "Chemistry", "level": 1, "progress": 6 },
    { "id": 37, "title": "Name the three states of matter.", "category": "Physics/Chemistry", "level": 1, "progress": 18 },
    { "id": 38, "title": "Explain the water cycle.", "category": "Geography", "level": 2, "progress": 47 },
    { "id": 39, "title": "What is the largest ocean on Earth?", "category": "Geography", "level": 1, "progress": 16 },
    { "id": 40, "title": "Who discovered penicillin?", "category": "Biology/History", "level": 3, "progress": 55 },
    { "id": 41, "title": "What is the primary language spoken in Brazil?", "category": "Language/Portuguese", "level": 1, "progress": 13 },
    { "id": 42, "title": "What is a synonym for 'happy'?", "category": "Language/English", "level": 1, "progress": 19 },
    { "id": 43, "title": "Describe the Renaissance period.", "category": "History/Art", "level": 4, "progress": 81 },
    { "id": 44, "title": "What is a haiku?", "category": "Literature/Poetry", "level": 2, "progress": 37 },
    { "id": 45, "title": "What is the formula for calculating the area of a circle?", "category": "Mathematics/Geometry", "level": 3, "progress": 63 },
    { "id": 46, "title": "Who was the first President of the United States?", "category": "History/Civics", "level": 1, "progress": 21 },
    { "id": 47, "title": "Define biodiversity.", "category": "Environmental Science", "level": 2, "progress": 41 },
    { "id": 48, "title": "What are the seven continents?", "category": "Geography", "level": 1, "progress": 8 },
    { "id": 49, "title": "Explain the concept of democracy.", "category": "Civics/Political Science", "level": 3, "progress": 66 },
    { "id": 50, "title": "What is the purpose of DNA?", "category": "Biology", "level": 4, "progress": 75 }
  ];

  setListView(): void {
    this.showTableView = false;
  }

  setTableView(): void {
    this.showTableView = true;
  }
  //=======================================
  // Part Of Confirmation Dialog For Deleting Question Or Not.

  constructor(public dialog: MatDialog) {}

  openUpdateDialog(item: any): void {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: { ...item }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
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
