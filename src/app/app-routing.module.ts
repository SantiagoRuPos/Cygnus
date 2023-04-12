import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./view/home/home.component";
import { ProjectsComponent } from "./view/projects/projects.component";
import { AppComponent  } from "./view/app/app.component";
import { ServicioTecnicoComponent } from "./view/servicio-tecnico/servicio-tecnico.component";
import {  MenuComponent } from "./view/menu/menu.component";

import { Error404Component } from "./emistakes/HTTP/error404/error404.component";
import {Error501Component  } from "./emistakes/HTTP/error501/error501.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Home', component: HomeComponent },
    { path: 'Proyectos', component: ProjectsComponent },
    { path: 'Proyecto', component: ProjectsComponent },
    { path: 'Servicio-Tecnico', component: ServicioTecnicoComponent },
    { path: 'Ayuda', component: ServicioTecnicoComponent },
    { path: 'App', component: Error501Component },
    { path: '**', component: Error404Component },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
