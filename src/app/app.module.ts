import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { FooterComponent } from './view/footer/footer.component';
import { MenuComponent } from './view/menu/menu.component';
import { ServicioTecnicoComponent } from './view/servicio-tecnico/servicio-tecnico.component';
import { ProjectsComponent } from './view/projects/projects.component';
import { Error404Component } from './emistakes/HTTP/error404/error404.component';
import { Error501Component } from './emistakes/HTTP/error501/error501.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    ServicioTecnicoComponent,
    ProjectsComponent,
    Error404Component,
    Error501Component,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
