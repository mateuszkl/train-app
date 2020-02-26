import { Injectable } from '@angular/core';
import {Training} from '../training/training.class';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  trainings = [new Training('workout1', 45), new Training('workout2', 10)];

  constructor() {
  }

  getTrainings() {
    return this.trainings;
  }
}
