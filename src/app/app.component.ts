import { LoaderComponent } from './../shared/components/loader/loader.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports : [RouterOutlet  , NavbarComponent , DashboardComponent , LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'Version_18';
}
