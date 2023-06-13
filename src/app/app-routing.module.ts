import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Core/auth/login/login.component';
import { HomeModule } from './Core/home/home.module';
import { HomeComponent } from './Core/home/home.component';
import { ChargeWheelComponent } from './Modules/Components/charge-wheel/charge-wheel.component';
import { ProgramaFormativoComponent } from './Modules/Pages/programa-formativo/programa-formativo.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./Core/auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
