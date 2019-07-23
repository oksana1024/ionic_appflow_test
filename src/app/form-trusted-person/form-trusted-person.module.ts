import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { FormTrustedPersonComponent } from './form-trusted-person.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormTrustedPersonComponent
      }
    ])
  ],
  declarations: [FormTrustedPersonComponent]
})
export class FormTrustedPersonModule {}

