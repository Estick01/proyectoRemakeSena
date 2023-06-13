import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './components-routing.module';
import { ChargeWheelComponent } from './charge-wheel/charge-wheel.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { ProgramaFormativoComponent } from '../Pages/programa-formativo/programa-formativo.component';
import { AreasComponent } from '../Pages/areas/areas.component';
import { ProyectoFormativoComponent } from '../Pages/proyecto-formativo/proyecto-formativo.component';


@NgModule({
  declarations: [
    ChargeWheelComponent,
    DescripcionComponent,
    ProgramaFormativoComponent,
    AreasComponent,
    ProyectoFormativoComponent


  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule,
  ],
  exports: [
    ChargeWheelComponent,
    DescripcionComponent,
    ProgramaFormativoComponent
  ]
})
export class ComponentsModule { }
