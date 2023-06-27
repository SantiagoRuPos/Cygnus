import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-error501',
  templateUrl: './error501.component.html',
  styleUrls: ['./error501.component.css']
})
export class Error501Component {
  ngOnInit(): void {
    this.Ruta_Error();
    }
  Ruta_Error(){
      
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
  
    })
      Toast.fire({  
        icon: 'error',
        title: 'Uy! lo sentimos mucho pero aun no esta implementada :c'
      })
    
    }
}
