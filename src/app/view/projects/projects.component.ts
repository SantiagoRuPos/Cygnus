import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  filterPost="";
Proyecto =[
  {"nombre":"Proyecto LoT",
   "Descripcion":"Proyecto plataforma LoT",
    "Url":"/proyecto1/index.html"},
  {"nombre":"Proyecto 2",
  "Descripcion":"Proyecto 2",
   "Url":"/proyecto2/index.html"},
  {"nombre":"Proyecto Santiago Ruiz",
  "Descripcion":"Proyecto Santiago Ruiz",
   "Url":"/webruiz/index.html"},
  {"nombre":"Proyecto LR",
  "Descripcion":"Proyecto de laboratorio remoto de fisica",
   "Url":"/proyectolr/index.html"},
]
ngOnInit(): void {
this.Mensahe_Projectos();
}
Mensahe_Projectos(){
      
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,

  })
    Toast.fire({  
      icon: 'warning',
      title: 'Proyectos'
    })
  
  }

}
