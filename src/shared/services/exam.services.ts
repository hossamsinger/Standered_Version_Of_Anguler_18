import { Injectable, signal } from '@angular/core';
import { questions } from '../../data/question';

export interface ExamState {
  currentQuestionIndex: number;
  answers: Record<number, number>;
}

@Injectable({
  providedIn: 'root'
})

export class ExamService {
  private examState = signal<ExamState>({
    currentQuestionIndex: 0,
    answers: {},
  });
  private completed = signal<boolean>(false);

  getExamState() {
    return this.examState;
  }

  isCompleted() {
    return this.completed;
  }

  setAnswer(questionId: number, answerIndex: number) {
    this.examState.update(state => ({
      ...state,
      answers: {
        ...state.answers,
        [questionId]: answerIndex,
      }
    }));
  }

  nextQuestion() {
    if (this.examState().currentQuestionIndex < questions.length - 1) {
      this.examState.update(state => ({
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      }));
    }
  }

  previousQuestion() {
    if (this.examState().currentQuestionIndex > 0) {
      this.examState.update(state => ({
        ...state,
        currentQuestionIndex: state.currentQuestionIndex - 1,
      }));
    }
  }
 
  resetExam() {
    this.examState.set({
      currentQuestionIndex: 0,
      answers: {},
    });
    this.completed.set(false);
  }

  getQuestions() {
    return questions;
  }

  getCurrentQuestion() {
    return questions[this.examState().currentQuestionIndex];
  }

  completeExam() {
    const allQuestionsAnswered = questions.every((_, index) => 
      this.examState().answers[index] !== undefined
    );
    
    if (allQuestionsAnswered) {
      this.completed.set(true);
    }
  }
}

