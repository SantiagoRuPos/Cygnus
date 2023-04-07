import { Component, OnInit } from '@angular/core';

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
    "Url":""},
  {"nombre":"Proyecto 2",
  "Descripcion":"Proyecto 2",
   "Url":""},
  {"nombre":"Proyecto Santiago Ruiz",
  "Descripcion":"Proyecto Santiago Ruiz",
   "Url":""},
  {"nombre":"Proyecto LR",
  "Descripcion":"Proyecto de laboratorio remoto de fisica",
   "Url":""},
]
ngOnInit(): void {

}
}
