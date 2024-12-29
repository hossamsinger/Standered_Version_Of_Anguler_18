import { QuestionsComponent } from './questions/questions.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'question', component: QuestionsComponent },
  { path: '**', redirectTo: 'login' }, // Wildcard route for undefined paths
];
