import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { PatientInfoComponent } from './patientInfo/patient-info.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
      ProductListComponent,
      PatientInfoComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
