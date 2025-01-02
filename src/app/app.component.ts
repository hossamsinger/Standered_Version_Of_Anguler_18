import { LoaderComponent } from './../shared/components/loader/loader.component';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet ,NavigationEnd } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { NgIf } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports : [RouterOutlet, NavbarComponent, LoaderComponent, NgIf, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent implements OnInit {
  showNavbar = true;

  constructor(
    private router: Router , 
  ) {}

  // Handel  Navbar Show Or Not IN Any Page I want.... 
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // List of routes where the navbar should not appear
        const noNavbarRoutes = ['/login'];
        this.showNavbar = !noNavbarRoutes.includes(event.urlAfterRedirects);
      }
    });

  }
}
