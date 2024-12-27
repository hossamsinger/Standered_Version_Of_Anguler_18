import { LoaderService } from './../../../shared/services/loader.services';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], 
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private router: Router,
    private loaderService: LoaderService,
    private snackBar: MatSnackBar
  ) {}
  
  onSubmit() {
    console.log("SUbmiting Now ....");
    
    this.errorMessage = '';
    this.loaderService.show();
    
    setTimeout(() => {
      const storedUserData = localStorage.getItem('user');
      console.log("storedUserData = " , storedUserData);
      
      if (!storedUserData) {
        debugger;
        const userData = {
          email: this.email,
          password: this.password
        };
        localStorage.setItem('user', JSON.stringify(userData));
        this.loaderService.hide();
        this.snackBar.open('Login successful!', 'Close', {
          duration: 3000, // Snackbar duration in milliseconds
          panelClass: ['success-snackbar'], // Optional custom styling class
        });
        this.router.navigate(['/dashboard']);
        return;
      }

      const userData = JSON.parse(storedUserData);
      console.log("userData = " , userData);
      
      if (userData.email === this.email && userData.password === this.password) {
        this.loaderService.hide();
        this.snackBar.open('Login successful!', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar'],
        });
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Invalid email or password';
        this.loaderService.hide();
        this.snackBar.open(this.errorMessage, 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar'],
        });
      }
    }, 3000);
  }
}