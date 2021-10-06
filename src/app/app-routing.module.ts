import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoswComponent } from './listadosw/listadosw.component';
import { PersonajeswComponent } from './personajesw/personajesw.component';

const routes: Routes = [
  { path: 'buscar', component: PersonajeswComponent },
  { path: 'listado', component: ListadoswComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
