import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargeWheelComponent } from 'src/app/Modules/Components/charge-wheel/charge-wheel.component';
import { HomeComponent } from './home.component';
import { ProgramaFormativoComponent } from 'src/app/Modules/Pages/programa-formativo/programa-formativo.component';
import { RouterOutlet } from '@angular/router';
import { ProyectoFormativoComponent } from 'src/app/Modules/Pages/proyecto-formativo/proyecto-formativo.component';
import { AreasComponent } from 'src/app/Modules/Pages/areas/areas.component';

const routes: Routes = [
  {
    path: 'proyecto',
    component: ProyectoFormativoComponent
    /*loadChildren: () =>
      import("src/app/Modules/Components/charge-wheel/charge-wheel.component").then(
        (m) => m.ChargeWheelComponent
      ),*/
  },
  {
    path:"programa",
    component: ProgramaFormativoComponent
  },
  {
    path:"Areas",
    component: AreasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
