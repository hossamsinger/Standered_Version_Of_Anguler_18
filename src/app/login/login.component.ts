import { ToastService } from './../../shared/services/toast.services';
import { LoaderService } from '../../shared/services/loader.services';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.None, // Allow global styles
  standalone: true,
  imports: [CommonModule, FormsModule, MatSnackBarModule ],
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
    private snackBar: MatSnackBar,
    public toastService: ToastService // Inject ToastService

  ) {}
  
  showSnackbar(message: string, panelClass: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: [panelClass],
      horizontalPosition: 'right',
      verticalPosition: 'top', 
    });
  }
  onSubmit() {
    console.log("SUbmiting Now ....");
    console.log("toastService === " ,this.toastService);

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
        debugger;
        // this.toastService.show('Login successful!', 'success'); // Use ToastService
        this.showSnackbar('Login successful! Congratulations!', 'success-snackbar');
        this.router.navigate(['/dashboard']);
        return;
      }

      const userData = JSON.parse(storedUserData);
      console.log("userData = " , userData);
      if (userData.email === this.email && userData.password === this.password) {
        debugger;
        this.loaderService.hide();
        // this.toastService.show('Login successful!', 'success'); // Use ToastService
        this.showSnackbar('Login successful! Congratulations!', 'success-snackbar');
        this.router.navigate(['/dashboard']);
      } else {
        debugger;
        this.errorMessage = 'Invalid email or password';
        this.loaderService.hide();
        this.showSnackbar(this.errorMessage, 'error-snackbar');
        // this.toastService.show(this.errorMessage, 'error'); // Use ToastService
      }
    }, 3000);
  }
}