import { ExamQuestionComponent } from './exam-questions/exam-questions.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExamProgressComponent } from './exam-progress/exam-progress.component';
import { ExamCompletionComponent } from "./exam-completion/exam-completion.component";
import { ExamService } from '../../shared/services/exam.services';

//  This Is Exam Consumar 
@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ExamProgressComponent,
    ExamQuestionComponent,
    ExamCompletionComponent
],
  template: `
    <div class="exam-container">
      <div class="exam-content">
        <div class="exam-sidebar">
          <app-exam-progress />
        </div>
        <div class="exam-main">
          <app-exam-question />
        </div>
      </div>
    </div>
    <!-- <app-exam-completion /> -->
    <app-exam-completion *ngIf="isExamCompleted()" />
  `,
  styles: [`
    .exam-container {
      padding: 1rem;
      height: calc(100vh - 64px); // Adjust based on your navbar height
    }

    .exam-content {
      display: flex;
      gap: 1rem;
      height: 100%;
      
      @media (max-width: 768px) {
        flex-direction: column;
      }
    }

    .exam-sidebar {
      width: 250px;
      flex-shrink: 0;
      
      @media (max-width: 768px) {
        width: 100%;
      }
    }

    .exam-main {
      flex: 1;
      min-width: 0;
    }
  `]
})
// export class ExamComponent {}
export class ExamComponent implements OnInit {
  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.examService.completeExam(); // Ensure exam completion check on load
  }

  // Check if all questions are answered
  isExamCompleted(): boolean {
    return this.examService.isCompleted()(); // Use () to access the value of the signal
  }
}