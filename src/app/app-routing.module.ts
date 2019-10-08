import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosBusquedaComponent } from './resultados-busqueda/resultados-busqueda.component';
import { StudiesComponent } from './studies/studies.component';
import {SeriesComponent} from './series/series.component';
import {ImagesComponent} from './images/images.component';
import {LauncherComponent} from './launcher/launcher.component';
import { ImportdatabaseComponent } from './importdatabase/importdatabase.component';
import { DatabaseComponent } from './database/database.component';
import {ViewdatabaseComponent} from './viewdatabase/viewdatabase.component';
import {DatabasepatientsComponent} from './databasepatients/databasepatients.component';
import {FreesurferdataComponent} from './freesurferdata/freesurferdata.component';
import {FreeviewpatientsComponent} from './freeviewpatients/freeviewpatients.component';
import { PacientesresonadorComponent } from './pacientesresonador/pacientesresonador.component';
import { BuscarpacientesresonadorComponent } from './buscarpacientesresonador/buscarpacientesresonador.component';
import { DescargandopacienteComponent } from './descargandopaciente/descargandopaciente.component';
import { DescargaresonadorComponent } from './descargaresonador/descargaresonador.component';
import { PacientescandidatosComponent } from './pacientescandidatos/pacientescandidatos.component';
import { PacientesestudioComponent } from './pacientesestudio/pacientesestudio.component';
import { ResultadocomparacionComponent } from './resultadocomparacion/resultadocomparacion.component';
import {PacientespatologicosComponent} from './pacientespatologicos/pacientespatologicos.component'
import { PacientescandidatosfaComponent } from './pacientescandidatosfa/pacientescandidatosfa.component';
import { ResultadocomparacionfaComponent } from './resultadocomparacionfa/resultadocomparacionfa.component';
import { ResultadocomparacionuscComponent } from './resultadocomparacionusc/resultadocomparacionusc.component';
import { EpilepsiasComponent } from './epilepsias/epilepsias.component';
import { TumoresComponent } from './tumores/tumores.component';
import { SeriesencolaComponent } from './seriesencola/seriesencola.component';
import { SeriesprocesandoComponent } from './seriesprocesando/seriesprocesando.component';
import { SeriesprocesadasComponent } from './seriesprocesadas/seriesprocesadas.component';
import { CognitivosComponent } from './cognitivos/cognitivos.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { LabelsComponent } from './labels/labels.component';
import { LabelComponent } from './label/label.component';

const appRoutes: Routes = [
  { path: 'launcher',        component: LauncherComponent },
  { path: 'search',        component: BusquedaComponent },
  { path: '',    redirectTo: '/launcher', pathMatch: 'full' },
  {path: 'results/:patient' ,   component: ResultadosBusquedaComponent },
  {path: 'results' ,   component: ResultadosBusquedaComponent },
  {path: 'results/:patient/:study/:serie' ,   component: ResultadosBusquedaComponent },
  {path: 'results/:patient/:study/:serie' ,   component: ResultadosBusquedaComponent },
  {path: 'pacientespatologicos/:patologicos' ,   component: ResultadosBusquedaComponent },
  {path: 'studies/:patient' ,   component: StudiesComponent },
  {path: 'studies/:patient/:search' ,   component: StudiesComponent },
  {path: 'series/:study' ,   component: SeriesComponent },
  {path: 'series/:study/:patient' ,   component: SeriesComponent },
  {path: 'images/:serie' ,   component: ImagesComponent },
  {path: 'importdatabase' ,   component: ImportdatabaseComponent },
  {path: 'databases' ,   component: DatabaseComponent },
  {path: 'databases/database/:id', component: ViewdatabaseComponent},
  {path: 'databases/database/patient/:id', component: DatabasepatientsComponent},
  {path: 'freesurferdata', component: FreesurferdataComponent},
  {path: 'freeview/database/:dir', component: FreeviewpatientsComponent},
  {path: 'pacientesresonador/:name' ,   component: PacientesresonadorComponent },
  {path: 'buscarpacientesresonador' ,   component: BuscarpacientesresonadorComponent },
  {path: 'descargandopaciente/:id' ,   component: DescargandopacienteComponent },
  {path: 'refrescarresonador' ,   component: DescargaresonadorComponent },
  {path: 'pacientescandidatos/:serie', component: PacientescandidatosComponent} ,
  {path: 'pacientesestudio', component: PacientesestudioComponent},
  {path: 'resultadocomparacion/:idSerie', component: ResultadocomparacionComponent}  ,
  {path: 'resultadocomparacionusc/:idSerie', component: ResultadocomparacionuscComponent}  ,
  {path: 'resultadocomparacionusc/:idSerie/:escala', component: ResultadocomparacionuscComponent}  ,
  {path: 'resultadocomparacionfa/:idSerie', component: ResultadocomparacionfaComponent}  ,
  {path: 'pacientescandidatosfa/:idSerie', component: PacientescandidatosfaComponent}  ,
  {path: 'epilepsias', component: EpilepsiasComponent}  ,
  {path: 'tumores', component: TumoresComponent}  ,
  {path: 'seriesencola', component: SeriesencolaComponent}  ,
  {path: 'seriesenproceso', component: SeriesprocesandoComponent}  ,
  {path: 'seriesprocesadas', component: SeriesprocesadasComponent},
  {path: 'cognitivos', component: CognitivosComponent},
  {path: 'admin', component: AdministracionComponent},
  {path: 'labels', component: LabelsComponent},
  {path: 'label', component: LabelComponent},
  {path: '**', component: PageNotFoundComponent },
  { path: 'error/:error', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}