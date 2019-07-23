import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { FormNoShowComponent } from './form-no-show.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    Ionic4DatepickerModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormNoShowComponent
      }
    ])
  ],
  declarations: [FormNoShowComponent]
})
export class FormNoShowModule { }
