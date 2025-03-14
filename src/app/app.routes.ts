import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    {path: 'about', title: 'About', component: AboutComponent},
    {path: 'contact', title: 'Contact', component: ContactComponent},
    {path: 'home', title: 'Home', component: HomeComponent},
    {path: 'projects', title: 'Projects', component: ProjectsComponent},
    {path: 'navbar', title: 'Navbar', component: NavbarComponent},
    {path: 'footer', title: 'Footer', component: FooterComponent}
];
