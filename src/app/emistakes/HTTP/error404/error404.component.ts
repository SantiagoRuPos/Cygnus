import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component {
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
        title: 'La ruta no existe'
      })
    
    }
}
