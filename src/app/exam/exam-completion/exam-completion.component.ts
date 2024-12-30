import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ExamService } from '../../../shared/services/exam.services';

@Component({
  selector: 'app-exam-completion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exam-completion.component.html',
  styleUrl: './exam-completion.component.scss',
})
export class ExamCompletionComponent {
  private examService = inject(ExamService);  
  private router = inject(Router);
  
  showPopup = computed(() => this.examService.isCompleted());
  
  totalQuestions = computed(() => this.examService.getQuestions().length);
//   answeredCount = computed(() => 
//     // Object.keys(this.examService.getExamState().answers).length
//     Object.keys(this.examService.getExamState().answers).length
//   );
  answeredCount = computed(() => {
    const state = this.examService.getExamState()();
    return Object.keys(state.answers).length;
  });
  onFinish() {
    this.examService.resetExam();
    this.router.navigate(['/dashboard']);
  }
}