import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth-guard';
import { LoginComponent } from './login/login.component';
import { PlacesComponent } from './places/places.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'places',
    component: PlacesComponent,
  },
];
