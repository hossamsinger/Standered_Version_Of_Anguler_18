import { ExamService } from '../../../shared/services/exam.services';
import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exam-question',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="question-card">
      <div class="question-header">
        <span class="question-number">Question {{currentQuestion().id}}</span>
        <span class="question-count">{{examState().currentQuestionIndex + 1}} of {{questions().length}}</span>
      </div>

      <div class="question-content">
        <p class="question-text">{{currentQuestion().text}}</p>

        <div class="choices-list">
          @for (choice of currentQuestion().choices; track $index) {
            <label 
              class="choice-item"
              [class.selected]="isSelected($index)"
            >
              <input
                type="radio"
                [name]="'q' + currentQuestion().id"
                [value]="$index"
                [checked]="isSelected($index)"
                (change)="onAnswer($index)"
                class="sr-only"
              />
              <span class="choice-text">{{choice}}</span>
            </label>
          }
        </div>
      </div>

      <div class="question-footer">
        <button
          type="button"
          class="btn-secondary"
          (click)="onBack()"
          [disabled]="isFirstQuestion()"
        >
          Previous
        </button>
        <button
          type="button"
          class="btn-primary"
          (click)="onNext()"
          [disabled]="!isAnswered()"

        >
          {{isLastQuestion() ? 'Finish Exam' : 'Next Question'}}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .question-card {
      background: white;
      border-radius: 0.5rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .question-header {
      padding: 1rem;
      border-bottom: 1px solid #e5e7eb;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .question-number {
      font-weight: 600;
      color: #1f2937;
    }

    .question-count {
      color: #6b7280;
      font-size: 0.875rem;
    }

    .question-content {
      padding: 1.5rem;
      flex: 1;
    }

    .question-text {
      font-size: 1.125rem;
      color: #1f2937;
      margin-bottom: 1.5rem;
    }

    .choices-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .choice-item {
      padding: 1rem;
      border: 2px solid #e5e7eb;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        border-color: #d1d5db;
      }

      &.selected {
        border-color: #2563eb;
        background-color: #eff6ff;
      }
    }

    .choice-text {
      color: #374151;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }

    .question-footer {
      padding: 1rem;
      border-top: 1px solid #e5e7eb;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }

    .btn-primary, .btn-secondary {
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      font-weight: 500;
      transition: all 0.2s;
    }

    .btn-primary {
      background-color: #2563eb;
      color: white;

      &:hover:not(:disabled) {
        background-color: #1d4ed8;
      }
    }

    .btn-secondary {
      background-color: #f3f4f6;
      color: #374151;

      &:hover:not(:disabled) {
        background-color: #e5e7eb;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  `]
})
export class ExamQuestionComponent {
  private examService = inject(ExamService);
  
  examState = this.examService.getExamState();
  currentQuestion = computed(() => this.examService.getCurrentQuestion());
  questions = computed(() => this.examService.getQuestions());

  isFirstQuestion = computed(() => this.examState().currentQuestionIndex === 0);
  isLastQuestion = computed(() => 
    this.examState().currentQuestionIndex === this.questions().length - 1
  );

  isSelected(index: number): boolean {
    return this.examState().answers[this.currentQuestion().id - 1] === index;
  }
  isAnswered(): boolean {
    return this.examState().answers[this.currentQuestion().id - 1] !== undefined;
  }

  onAnswer(index: number) {
    this.examService.setAnswer(this.currentQuestion().id - 1, index);
  }

  onNext() {
    if (this.isLastQuestion()) {
      this.examService.completeExam();
    } else {
      this.examService.nextQuestion();
    }
  }

  onBack() {
    this.examService.previousQuestion();
  }
}