import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LoginComponent } from './components/login/login.component';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';
import { GrupoComponent } from './components/grupo/grupo.component';
import { GrupoListarComponent } from './components/grupo-listar/grupo-listar.component';
import { TrabajadorCrearComponent } from './components/trabajador-crear/trabajador-crear.component';
import { GrupoAsignarComponent } from './components/grupo-asignar/grupo-asignar.component';
import { GrupoVerComponent } from './components/grupo-ver/grupo-ver.component';
import { SolicitudesVerComponent } from './components/solicitudes-ver/solicitudes-ver.component';
import { SolicitudesListarComponent } from './components/solicitudes-listar/solicitudes-listar.component';
import { SolicitudCrearComponent } from './components/solicitud-crear/solicitud-crear.component';
import { SolicitudAprobadoComponent } from './components/solicitud-aprobado/solicitud-aprobado.component';
import { SolicitudRechazadoComponent } from './components/solicitud-rechazado/solicitud-rechazado.component';


const routes: Routes = [
  {path: 'perfil', component: PerfilComponent },
  {path: 'login', component: LoginComponent },
  {path: 'trabajadores', component: TrabajadoresComponent },
  {path: 'trabajador/crear', component: TrabajadorCrearComponent },
  {path: 'grupo', component: GrupoComponent },
  {path: 'grupo/ver', component: GrupoVerComponent },
  {path: 'grupo/listar', component: GrupoListarComponent },
  {path: 'grupo/asignar', component: GrupoAsignarComponent },
  {path: 'solicitudes/ver', component: SolicitudesVerComponent },
  {path: 'solicitudes/listar', component: SolicitudesListarComponent },
  {path: 'solicitud/crear', component: SolicitudCrearComponent },
  {path: 'solicitudes/aprobado', component: SolicitudAprobadoComponent },
  {path: 'solicitudes/rechazado', component: SolicitudRechazadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
