import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.feedbackForm = new FormGroup({
      kidName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      progNote: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      feedbackNote: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    });
  }
  get kidName() {
    return this.feedbackForm.get('kidName');
  }

  get progNote() {
    return this.feedbackForm.get('progNote');
  }

  get feedbackNote() {
    return this.feedbackForm.get('feedbackNote');
  }


}


