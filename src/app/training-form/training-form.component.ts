import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.css']
})
export class TrainingFormComponent implements OnInit {

  trainingForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.trainingForm = this.formBuilder.group({
      trainingName: '',
      durationInMinutes: ''
    });
  }

  onSubmit(form) {
    console.log(form.value);
    // todo
    form.reset();
  }
}
