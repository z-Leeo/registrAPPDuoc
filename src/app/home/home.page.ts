import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ResetForm } from './model/reset-form';
import { UserServiceService } from '../user-service.service';
import { Subscription } from 'rxjs';
import { LoadingController } from '@ionic/angular';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  public alertButtons = ['OK'];
  loggedUser: any;

  usuario: any;

  objResetForm: ResetForm = new ResetForm();
  nombre: string = '';
  apellido: string = '';
  NE:string = '';
  rut: string = '';
  

  constructor(private userservice : UserServiceService,
              private router: Router,
              private loadingCtrl : LoadingController) {
  }

  
  ngOnInit() {

    this.usuario = this.userservice.getUsername();
  
  }


   clearC() {
    this.nombre = '';
    this.apellido = '';
    this.NE = '';
    this.rut= '';
  }
  
  continuar(){
    this.router.navigate(['/qrcode'])
  }

  async cerrar(){
    const loading = await this.loadingCtrl.create({
      message: 'Saliendo...',
      duration: 3000,
      cssClass: 'custom-loading',
    });

    loading.present();
  }

}
