import { Component, OnInit } from '@angular/core';
import {TrainingService} from './training.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {

  trainings;

  constructor(service: TrainingService) {
    this.trainings = service.getTrainings();
  }

  ngOnInit(): void {
  }

}
