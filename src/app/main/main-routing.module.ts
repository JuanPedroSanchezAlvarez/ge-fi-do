import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

const routes: Routes = [
  {
    path: '', component: MainMenuComponent,
    children: [
      { path: 'movimientos', loadChildren: () => import('./movimientos/movimientos.module').then( m => m.MovimientosModule) },
      { path: '**', redirectTo: 'movimientos' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
