import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-trusted-person',
  templateUrl: './form-trusted-person.component.html',
  styleUrls: ['./form-trusted-person.component.scss'],
})
export class FormTrustedPersonComponent implements OnInit {

  trustedPersonForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.trustedPersonForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[(]?([0-9]{3})[)]?[-. ]?([0-9]{3})[-. ]?([0-9]{4})')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      photo: new FormControl(''),
      copyOfId: new FormControl('')
    });

  }

  get firstName() {
    return this.trustedPersonForm.get('firstName');
  }

  get lastName() {
    return this.trustedPersonForm.get('lastName');
  }

  get phone() {
    return this.trustedPersonForm.get('phone');
  }
  
  get email() {
    return this.trustedPersonForm.get('email');
  }

}
