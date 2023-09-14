import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-pswd-forget',
  templateUrl: './pswd-forget.page.html',
  styleUrls: ['./pswd-forget.page.scss'],
})
export class PswdForgetPage implements OnInit {


  

  isCaptchaValid = false;

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
  }

  get siteKey(){
    return environment.recaptcha.siteKey;
  }
 
  captchaResolved($event: any){
    console.log("Captcha Resolved", $event);
    this.isCaptchaValid = true;
  }


  enviar(){
    this.router.navigate(['/login']);

  }
}
