import { Routes } from '@angular/router';
import { FeedbackFormComponent } from './pages/feedback-form/feedback-form';
import { DashboardComponent } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: FeedbackFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];
