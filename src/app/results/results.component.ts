import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { results } from '../../data/results';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  items = results;
}

