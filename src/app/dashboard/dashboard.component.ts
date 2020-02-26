import {Component} from '@angular/core';
import {DashboardService} from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  trainings;

  constructor(service: DashboardService) {
    this.trainings = service.getTrainings();
  }

}
