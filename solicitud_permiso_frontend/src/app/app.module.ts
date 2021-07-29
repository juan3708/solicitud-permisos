import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './components/perfil/perfil.component';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';
import { GrupoComponent } from './components/grupo/grupo.component';
import { GrupoListarComponent } from './components/grupo-listar/grupo-listar.component';
import { TrabajadorCrearComponent } from './components/trabajador-crear/trabajador-crear.component';
import { FormsModule } from '@angular/forms';
import { GrupoAsignarComponent } from './components/grupo-asignar/grupo-asignar.component';
import { GrupoVerComponent } from './components/grupo-ver/grupo-ver.component';
import { SolicitudesVerComponent } from './components/solicitudes-ver/solicitudes-ver.component';
import { SolicitudesListarComponent } from './components/solicitudes-listar/solicitudes-listar.component';
import { SolicitudCrearComponent } from './components/solicitud-crear/solicitud-crear.component';
import { SolicitudRechazadoComponent } from './components/solicitud-rechazado/solicitud-rechazado.component';
import { SolicitudAprobadoComponent } from './components/solicitud-aprobado/solicitud-aprobado.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    PerfilComponent,
    TrabajadoresComponent,
    GrupoComponent,
    GrupoListarComponent,
    TrabajadorCrearComponent,
    GrupoAsignarComponent,
    GrupoVerComponent,
    SolicitudesVerComponent,
    SolicitudesListarComponent,
    SolicitudCrearComponent,
    SolicitudRechazadoComponent,
    SolicitudAprobadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
