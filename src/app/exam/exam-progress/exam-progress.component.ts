import { ExamService } from '../../../shared/services/exam.services';
import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exam-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exam-progress.component.html',
  styleUrl: './exam-progress.component.scss',
})
export class ExamProgressComponent {
  private examService = inject(ExamService);
  
  questions = computed(() => this.examService.getQuestions());
  examState = this.examService.getExamState();

  isAnswered(questionId: number): boolean {
    return this.examState().answers[questionId] !== undefined;
  }
}