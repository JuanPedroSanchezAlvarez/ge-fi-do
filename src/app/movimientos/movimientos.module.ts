import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimientosRoutingModule } from './movimientos-routing.module';
import { MainComponent } from './pages/main/main.component';
import { EditComponent } from './pages/edit/edit.component';


@NgModule({
  declarations: [
    MainComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    MovimientosRoutingModule
  ]
})
export class MovimientosModule { }
