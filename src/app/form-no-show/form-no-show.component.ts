import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-no-show',
  templateUrl: './form-no-show.component.html',
  styleUrls: ['./form-no-show.component.scss'],
})
export class FormNoShowComponent implements OnInit {
  name='';

  noShowForm: FormGroup;

  childrenList = ['John Smith', 'Hans Schneider', 'Jean Leblanc', 'Giovanni Russo']
  reasonList = ['sickness', 'vacations', 'birthday', 'other']

   // ionic4datepicker settings
  myDate = new Date().toISOString();
  minDate:any  = new Date(new Date().setDate(new Date().getDate()-30)).toISOString();
  datePickerObj: any = {
    showTodayButton: false, // default true
    closeOnSelect: true, // default false
    mondayFirst: true, // default false
    fromDate: this.minDate,
    dateFormat: 'DD MMMM YYYY',
    btnProperties: { 
      size: 'large',
      color: 'dark' }
  }

  placeholder: string = 'Search for name...';
  keyword = 'name';
  historyHeading: string = 'Recently selected:';
  

  //functions for dropdown
  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }


  constructor() {}

  ngOnInit() {
    this.noShowForm = new FormGroup({
        childName: new FormControl('', Validators.required),
        reason: new FormControl('', Validators.required),
        dateFrom: new FormControl('', Validators.required),
        dateTo: new FormControl('', Validators.required),
        notes: new FormControl('')
      },
      this.pastDateValidator
    );
  }
  
  //Hack to make sure the dropdown list shows on top of the next input.
  ngAfterViewInit() {
    (document.querySelector('.autocomplete-container') as HTMLElement).style.zIndex = '100';
    (document.querySelector('.input-container > input') as HTMLElement).style.fontSize = '1.25em';
  }

  pastDateValidator(fg: FormGroup) {
    return new Date((fg.get('dateFrom').value)) > new Date((fg.get('dateTo').value))
       ? {"dateError": true} : null;
  }


  submitReactiveForm() {
    if (this.noShowForm.valid) {
      console.log(this.noShowForm.value);
    }
  }

  get childName() {
    return this.noShowForm.get('childName');
  }

  get reason() {
    return this.noShowForm.get('reason');
  }

  get dateFrom() {
    return this.noShowForm.get('dateFrom');
  }

  get dateTo() {
    return this.noShowForm.get('dateTo');
  }

  get notes() {
    return this.noShowForm.get('notes');
  }

}
