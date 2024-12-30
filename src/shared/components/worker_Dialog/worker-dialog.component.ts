// import { Component, Inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { MatButtonModule } from '@angular/material/button';

// @Component({
//   selector: 'app-update-dialog',
//   standalone: true,
//   imports: [
//     CommonModule,
//     FormsModule,
//     MatDialogModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatSelectModule,
//     MatButtonModule
//   ],
//   templateUrl: './worker-dialog.component.html',
//   styleUrls: ['./worker-dialog.component.scss'],
// })
// export class UpdateDialogComponent {
//   levels = [1, 2, 3, 4, 5];

//   constructor(
//     public dialogRef: MatDialogRef<UpdateDialogComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any
//   ) {}

//   onCancel(): void {
//     this.dialogRef.close();
//   }

//   onSubmit(action: string): void {
//     if (action === 'add') {
//       // Logic for adding a question
//       const newQuestion = this.updateForm.value; // Assuming your form data is bound to `updateForm`
//       // Add the question to your table or data source
//       this.data.questions.push(newQuestion); // Adjust `this.data.questions` to your actual data structure
//       console.log('Question added:', newQuestion);
//     } else if (action === 'update') {
//       // Logic for updating a question
//       const updatedQuestion = this.updateForm.value;
//       // Update the question in your data source
//       const index = this.data.questions.findIndex(q => q.id === updatedQuestion.id); // Adjust this to your actual logic
//       if (index > -1) {
//         this.data.questions[index] = updatedQuestion;
//         console.log('Question updated:', updatedQuestion);
//       }
//     }
  
//     // Close the dialog
//     this.dialogRef.close(this.data);
//   }
  
// }
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-update-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './worker-dialog.component.html',
  styleUrls: ['./worker-dialog.component.scss'],
})
export class UpdateDialogComponent {
  levels = [1, 2, 3, 4, 5]; 
  formData: any = {
    title: "",
    category: "",
    level: null,
    progress: null,
    id: null
  };

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close(); 
  }

  onSubmit(action: string): void {
    debugger;
    // Logic for adding a question
    if (action === 'add') {
      const newQuestion = { ...this.data, id: this.generateId() }; 
      if (!Array.isArray(this.data.questions)) {
        this.data.questions = []; 
      }
  
      this.data.questions.unshift(newQuestion); 
      console.log('Question added:', newQuestion);
      console.log('Data Modified:', this.data);
  
    } 
    // Logic for updating a question
    else if (action === 'update') {
      const updatedQuestion = { ...this.formData };
      const checkArray = Array(this.data)
      const index = checkArray.findIndex((q: any) => q.id === updatedQuestion.id); // Find the index by id
      if (index > -1) {
        this.data.questions[index] = updatedQuestion; 
        console.log('Question updated:', updatedQuestion);
      }
    }
    this.dialogRef.close(this.data); 
  }
  
  private generateId(): number {
    return Date.now(); 
  }
  
}
