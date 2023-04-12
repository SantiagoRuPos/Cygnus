import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    
    if (!localStorage.getItem('visited')) {
      this.MensajeBienvenida(); 
      localStorage.setItem('visited', 'true');
    }
    this.Mensahe_Home();
  //Se agrega la alerta



  }
  MensajeBienvenida(){
      
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
  
    })
      Toast.fire({  
        icon: 'success',
        title: 'Bienvenid@'
      })
    

    }
    Mensahe_Home(){
      
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    
      })
        Toast.fire({  
          icon: 'warning',
          title: 'Estas en el home'
        })
      
      }
}
