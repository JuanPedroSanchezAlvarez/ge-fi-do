import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  exports: [
    MatButtonModule,
    MatSliderModule
  ]
})
export class MaterialModule { }
