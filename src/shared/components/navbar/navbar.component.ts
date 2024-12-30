import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  path: string;
  badge?: number;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive ,RouterModule]
})
export class NavbarComponent {
  navItems: NavItem[] = [
    { label: 'Dashboard', path: '/dashboard', badge: 5 },
    { label: 'Exam Starting', path: '/exam' },
    { label: 'All Question', path: '/question', badge: 50 },
    { label: 'Results', path: '/results', badge: 12 }
  ];
}