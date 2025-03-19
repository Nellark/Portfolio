import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


export const routes: Routes = [

    {path: '', title: 'Home', component: HomeComponent},
    {path: 'about', title: 'About', component: AboutComponent},
    {path: 'navbar', title: 'Navbar', component: NavbarComponent},
    {path: 'footer', title: 'Footer', component: FooterComponent},
    {path: 'dash', title: 'Dashboard', component: DashboardComponent},
 
];
