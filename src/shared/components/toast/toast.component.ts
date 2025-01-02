import {CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Toast, ToastService } from './../../services/toast.services';

@Component({
  selector: 'app-toast',
  standalone: true, 
  imports:[CommonModule],
  template: `
    <div 
      *NgIf="toast" 
      class="toast" 
      [class.success]="toast?.type === 'success'" 
      [class.error]="toast?.type === 'error'" 
      [class.info]="toast?.type === 'info'">
      {{ toast?.message }}
    </div>
  `,
  styles: `
    .toast {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 10px 20px;
      border-radius: 4px;
      font-size: 14px;
      color: white;
      z-index: 1000;
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
    .toast.success {
      background-color: #4caf50;
    }
    .toast.error {
      background-color: #f44336;
    }
    .toast.info {
      background-color: #2196f3;
    }
  `,
})
export class ToastComponent {
  toast: Toast | null = null;

  constructor(private toastService: ToastService) {
    this.toastService.toast$.subscribe(toast => {
      this.toast = toast;
      if (toast) {
        setTimeout(() => {
          this.toast = null;
        }, 3000);
      }
    });
  }
}
