import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  usuario: any;
  password: any;

  constructor(public fb: FormBuilder,
              public alertController :AlertController,
              private userservice : UserServiceService,
              private router: Router) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });


   }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if (this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header:'Datos Incompletos',
        message: 'Tienes que llenar todos los datos!',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
      return;
    }else{
      this.router.navigate(['/login']);
    }
    

    var usuario = {
      nombre: f.nombre,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));

   this.userservice.guardar(this.usuario, this.password)

    
  }

  ionViewWillEnter() {
    this.formularioRegistro.reset(); // Reinicia el estado del formulario
  }
}
