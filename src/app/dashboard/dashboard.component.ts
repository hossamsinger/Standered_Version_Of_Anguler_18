import { Component } from '@angular/core';
import { NgIf , NgFor } from '@angular/common';
import { dashboard_data } from '../../data/dashboard';
@Component({
  selector: 'app-dashboard',
  imports:[NgIf , NgFor],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showTableView = true; // Toggle between list view and table view
  // items = dashboard_data;
  items = [
    {
      title: 'Mathematics And Algorithms',
      link: 'Mathematics&Algorithms.com',
      description: 'This exam contains questions about Mathematics and Algorithms in our field.',
      progress: 20,
      daysLeft: 2
    },
    {
      title: 'Problem Solving Advanced',
      link: 'ProblemSolving.com',
      description: 'This exam contains advanced problem-solving questions in our field.',
      progress: 40,
      daysLeft: 5
    },
    {
      title: 'Bridge and Analytics',
      link: 'Bridge&Analytics.com',
      description: 'This exam contains questions about bridge and analytics in our field.',
      progress: 60,
      daysLeft: 7
    },
    {
      title: 'Financial and E-Commerce',
      link: 'Financial&Ecommerce.com',
      description: 'This exam contains questions about financial and e-commerce topics in our field.',
      progress: 80,
      daysLeft: 10
    },
    {
      title: 'Agriculture And Farmiing',
      link: 'Agriculture123.com',
      description: 'This exam contains questions about Agriculture and Farming topics in our field.',
      progress: 44,
      daysLeft: 7
    },
    {
      title: ' Analytics And DataBase',
      link: 'Bridge&Analytics.com',
      description: 'This exam contains questions about bridge and analytics in our field.',
      progress: 60,
      daysLeft: 7
    },
    {
      title: 'Mathematics And Algorithms',
      link: 'Mathematics&Algorithms.com',
      description: 'This exam contains questions about Mathematics and Algorithms in our field.',
      progress: 20,
      daysLeft: 2
    },
    {
      title: 'Problem Solving Advanced',
      link: 'ProblemSolving.com',
      description: 'This exam contains advanced problem-solving questions in our field.',
      progress: 40,
      daysLeft: 5
    },
    {
      title: 'Bridge and Analytics',
      link: 'Bridge&Analytics.com',
      description: 'This exam contains questions about bridge and analytics in our field.',
      progress: 60,
      daysLeft: 7
    },
    {
      title: 'Financial and E-Commerce',
      link: 'Financial&Ecommerce.com',
      description: 'This exam contains questions about financial and e-commerce topics in our field.',
      progress: 80,
      daysLeft: 10
    }
  ];

  setListView(): void {
    this.showTableView = false;
  }

  setTableView(): void {
    this.showTableView = true;
  }
}
