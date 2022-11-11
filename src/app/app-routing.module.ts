import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', component: MainMenuComponent },
  //{ path: 'login', component: LoginComponent },
  { path: 'movimientos', loadChildren: () => import('./movimientos/movimientos.module').then( m => m.MovimientosModule) },
  { path: '**', redirectTo: 'movimientos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
