import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserServiceService } from '../user-service.service';
import { delay } from 'rxjs';
import { trigger, style, transition } from '@angular/animations'
import { slideInFromLeftAnimation } from '../animations/animations';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [slideInFromLeftAnimation]
})
export class LoginPage implements OnInit {

  
  
  usuario!: string;
  password!: string;

  formularioLogin: FormGroup;
  constructor(public fb: FormBuilder,
    public alertController :AlertController,
    private router: Router,
    private userservice: UserServiceService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController){

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }


  async ingreso(){
    
    
    const loading = await this.loadingCtrl.create({
      message: 'Autenticando...',
      duration: 3000,
      cssClass: 'custom-loading',
    });

    loading.present();
  


  }
  ionViewWillEnter() {
    this.formularioLogin.reset(); // Reinicia el estado del formulario
  }

}
