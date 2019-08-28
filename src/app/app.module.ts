import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSortModule,MatTableModule , MatPaginatorModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ResultadosBusquedaComponent } from './resultados-busqueda/resultados-busqueda.component';
import { StudiesComponent } from './studies/studies.component';
import { SeriesComponent } from './series/series.component';
import { ImagesComponent } from './images/images.component';
import { LauncherComponent } from './launcher/launcher.component';
import { ImportdatabaseComponent } from './importdatabase/importdatabase.component';
import { DatabaseComponent } from './database/database.component';
import { ViewdatabaseComponent } from './viewdatabase/viewdatabase.component';
import { DatabasepatientsComponent } from './databasepatients/databasepatients.component';
import { FreesurferdataComponent } from './freesurferdata/freesurferdata.component';
import { FreeviewpatientsComponent } from './freeviewpatients/freeviewpatients.component';
import { SearcherpanelComponent } from './components/searcherpanel/searcherpanel.component';
import { PacientesresonadorComponent } from './pacientesresonador/pacientesresonador.component';
import { BuscarpacientesresonadorComponent } from './buscarpacientesresonador/buscarpacientesresonador.component';
import { DescargandopacienteComponent } from './descargandopaciente/descargandopaciente.component';
import { DescargaresonadorComponent } from './descargaresonador/descargaresonador.component';
import { PacientescandidatosComponent } from './pacientescandidatos/pacientescandidatos.component';
import { PacientesestudioComponent } from './pacientesestudio/pacientesestudio.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { ResultadocomparacionComponent } from './resultadocomparacion/resultadocomparacion.component';
import { PacientespatologicosComponent } from './pacientespatologicos/pacientespatologicos.component';
import localeFr from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
import { PacientescandidatosfaComponent } from './pacientescandidatosfa/pacientescandidatosfa.component';
import { ResultadocomparacionfaComponent } from './resultadocomparacionfa/resultadocomparacionfa.component';
import { HttpModule } from '@angular/http';
import { ResultadocomparacionuscComponent } from './resultadocomparacionusc/resultadocomparacionusc.component';
import { AparctableComponent } from './aparctable/aparctable.component';
import { EpilepsiasComponent } from './epilepsias/epilepsias.component';
import { TumoresComponent } from './tumores/tumores.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { SeriesencolaComponent } from './seriesencola/seriesencola.component';
import { SeriesprocesandoComponent } from './seriesprocesando/seriesprocesando.component';
import { SeriesprocesadasComponent } from './seriesprocesadas/seriesprocesadas.component';
import { CognitivosComponent } from './cognitivos/cognitivos.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { LabelsComponent } from './labels/labels.component';
import { LabelComponent } from './label/label.component';
import { ReferenciasfreeviewComponent } from './referenciasfreeview/referenciasfreeview.component';
import { DesviosComponent } from './component/referenciasfreeview/desvios/desvios.component';
registerLocaleData(localeFr, 'es-AR');
const appRoutes: Routes = [
  { path: 'search/:name',      component: BusquedaComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ResultadosBusquedaComponent,
    StudiesComponent,
    SeriesComponent,
    ImagesComponent,
    LauncherComponent,
    ImportdatabaseComponent,
    DatabaseComponent,
    ViewdatabaseComponent,
    DatabasepatientsComponent,
    FreesurferdataComponent,
    FreeviewpatientsComponent,
    SearcherpanelComponent,
    PacientesresonadorComponent,
    BuscarpacientesresonadorComponent,
    DescargandopacienteComponent,
    DescargaresonadorComponent,
    PacientescandidatosComponent,
    PacientesestudioComponent,
    ResultadoComponent,
    ResultadocomparacionComponent,
    PacientespatologicosComponent,
    PacientescandidatosfaComponent,
    ResultadocomparacionfaComponent,
    ResultadocomparacionuscComponent,
    AparctableComponent,
    EpilepsiasComponent,
    TumoresComponent,
    PacientesComponent,
    SeriesencolaComponent,
    SeriesprocesandoComponent,
    SeriesprocesadasComponent,
    CognitivosComponent,
    AdministracionComponent,
    LabelsComponent,
    LabelComponent,
    ReferenciasfreeviewComponent,
    DesviosComponent
  ],
  imports: [

    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule, 
    MatListModule,
    NgbModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    HttpModule
    
    
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es-AR' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
