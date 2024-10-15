import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HeaderComponent } from './header/header/header.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirect root URL to /home
    { 
        path: 'home',
        loadComponent: () => import('../app/home/home.component').then((m) => m.HomeComponent),
    },  // Home page route
    { path: 'about', component: AboutComponent },  // About page route
    { path: 'header', component: HeaderComponent },  // About page route
    { path: 'dashboard', component: DashboardComponent }  // About page route
];
