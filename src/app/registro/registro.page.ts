import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { AutheticationService } from '../authetication.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro!: FormGroup; 
 
  constructor(public fb: FormBuilder,
              public alertController :AlertController,
              private userservice : UserServiceService,
              private router: Router,
              public loadingCtrl :LoadingController,
              public authService: AutheticationService,
              ) {
  


   }

  ngOnInit() {
    this.formularioRegistro = this.fb.group({
      nombre : ['', [Validators.required]],
      email : ['', [Validators.required], 
        Validators.email, 
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')],
      password : ['',Validators.required,]
    
    })
  }


  get errorControl(){
    return this.formularioRegistro?.controls;
  };

  async guardar(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.formularioRegistro?.valid){
      const user = await this.authService.register(this.formularioRegistro.value.email, this.formularioRegistro.value.password).catch((error)=>{
      
    }).catch((error)=>{
      console.log(error);
      loading.dismiss()
    })
  
    if(user){
      loading.dismiss()
      this.router.navigate(['/home'])
    }else{
      console.log('Ingresa credenciales correctas');
    }
  }
  
  }
  ionViewWillEnter() {
    this.formularioRegistro?.reset(); // Reinicia el estado del formulario
  }
}
