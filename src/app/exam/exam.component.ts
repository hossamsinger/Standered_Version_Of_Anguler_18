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
    ExamCompletionComponent],
    templateUrl: './exam.component.html',
    styleUrl: './exam.component.scss',
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