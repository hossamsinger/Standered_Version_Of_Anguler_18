import { LoginComponent } from './components/login/login.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { ExamComponent } from './components/exam/exam.component';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'question', component: QuestionsComponent },
  { path: '**', redirectTo: 'login' }, // Wildcard route for undefined paths
];
