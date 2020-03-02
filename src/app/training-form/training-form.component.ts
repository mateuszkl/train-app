import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {TrainingService} from '../training-list/training.service';
import {Training} from '../training/training.class';

@Component({
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.css']
})
export class TrainingFormComponent implements OnInit {

  trainingForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private service: TrainingService) {
  }

  ngOnInit() {
    this.trainingForm = this.formBuilder.group({
      trainingName: '',
      durationInMinutes: ''
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
    this.service.addTraining(new Training(form.value.trainingName, form.value.durationInMinutes));
    this.router.navigate(['/trainings']);
  }
}
