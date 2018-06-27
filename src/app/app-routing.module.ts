import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const AppRoutes: Routes = [
  { path: '', redirectTo: '/app/main', pathMatch: 'full' },
  { path: 'app/main', component: MainComponent },
  { path: '**', redirectTo: '/app/main', pathMatch: 'full' },
];

export const AppRoutingModule = RouterModule.forRoot(AppRoutes, { useHash: true });
