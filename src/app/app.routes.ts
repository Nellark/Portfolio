import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';


export const routes: Routes = [

    {path: '', title: 'Home', component: HomeComponent},
    {path: 'about', title: 'Navbar', component: AboutComponent},
    {path: 'navbar', title: 'Navbar', component: NavbarComponent},
    {path: 'footer', title: 'Footer', component: FooterComponent},
 
];
