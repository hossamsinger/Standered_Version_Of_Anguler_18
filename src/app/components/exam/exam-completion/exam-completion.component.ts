import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ExamService } from '../../../../shared/services/exam.services';

@Component({
  selector: 'app-exam-completion',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (showPopup()) {
      <div class="popup-overlay">
        <div class="popup-content">
          <div class="completion-icon">🎉</div>
          <h2 class="completion-title">Congratulations!</h2>
          <p class="completion-message">You have successfully completed the exam.</p>
          <div class="completion-stats">
            <div class="stat-item">
              <span class="stat-label">Questions Answered</span>
              <span class="stat-value">{{answeredCount()}} / {{totalQuestions()}}</span>
            </div>
          </div>
          <button class="btn-primary" (click)="onFinish()">
            Return to Dashboard
          </button>
        </div>
      </div>
    }
  `,
  styles: [`
    .popup-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .popup-content {
      background: white;
      border-radius: 1rem;
      padding: 2rem;
      text-align: center;
      max-width: 400px;
      width: 90%;
      animation: popup 0.3s ease-out;
    }

    @keyframes popup {
      from {
        transform: scale(0.8);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }

    .completion-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .completion-title {
      color: #1f2937;
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .completion-message {
      color: #6b7280;
      margin-bottom: 1.5rem;
    }

    .completion-stats {
      background-color: #f3f4f6;
      border-radius: 0.5rem;
      padding: 1rem;
      margin-bottom: 1.5rem;
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .stat-label {
      color: #6b7280;
      font-size: 0.875rem;
    }

    .stat-value {
      color: #1f2937;
      font-weight: 600;
    }

    .btn-primary {
      background-color: #2563eb;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      font-weight: 500;
      transition: all 0.2s;

      &:hover {
        background-color: #1d4ed8;
      }
    }
  `]
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