import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogoDaVelhaModule } from './jogo-da-velha';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    JogoDaVelhaModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
