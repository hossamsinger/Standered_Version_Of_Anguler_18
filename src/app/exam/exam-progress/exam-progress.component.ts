import { ExamService } from '../../../shared/services/exam.services';
import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exam-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="progress-card">
      <h3 class="progress-title">Exam Progress</h3>
      <div class="checkbox-grid">
        @for (question of questions(); track question.id) {
          <div class="checkbox-item">
            <input 
              type="checkbox"
              [checked]="isAnswered(question.id - 1)"
              disabled
              class="progress-checkbox"
            />
            <span class="question-number">{{question.id}}</span>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .progress-card {
      background: white;
      border-radius: 0.5rem;
      padding: 1rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .progress-title {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #1f2937;
    }

    .checkbox-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.75rem;
    }

    .checkbox-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
    }

    .progress-checkbox {
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 0.25rem;
      cursor: default;
    }

    .question-number {
      font-size: 0.75rem;
      color: #6b7280;
    }
  `]
})
export class ExamProgressComponent {
  private examService = inject(ExamService);
  
  questions = computed(() => this.examService.getQuestions());
  examState = this.examService.getExamState();

  isAnswered(questionId: number): boolean {
    return this.examState().answers[questionId] !== undefined;
  }
}