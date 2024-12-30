import { ExamService } from '../../../shared/services/exam.services';
import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exam-question',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exam-questions.component.html',
  styleUrl: './exam-questions.component.scss',
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