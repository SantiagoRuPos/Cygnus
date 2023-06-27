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
  {"nombre":"Proyecto IoT",
   "Descripcion":"Proyecto plataforma IoT",
    "Url":"http://cygnus.uniajc.edu.co/proyecto1/index.html"},
  {"nombre":"Proyecto 2",
  "Descripcion":"Proyecto 2",
   "Url":"http://cygnus.uniajc.edu.co/proyecto2/index.html"},
  {"nombre":"Proyecto Santiago Ruiz",
  "Descripcion":"Proyecto Santiago Ruiz",
   "Url":"http://cygnus.uniajc.edu.co/webruiz/index.html"},
  {"nombre":"Proyecto LR",
  "Descripcion":"Proyecto de laboratorio remoto de fisica",
   "Url":"http://cygnus.uniajc.edu.co/proyectolr/index.html"},
   {"nombre":"Certamen Fisica",
   "Descripcion":"Proyecto de certamen Fisica Julian Angel",
    "Url":"http://cygnus.uniajc.edu.co/webjulian/index.html"},
    {"nombre":"Proyecto PLCs IoT",
    "Descripcion":"Poyecto PLCs IoT",
     "Url":"http://cygnus.uniajc.edu.co/webWalter/index.html"},
]
ngOnInit(): void {
this.Mensaje_Projectos();
}
Mensaje_Projectos(){
      
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
