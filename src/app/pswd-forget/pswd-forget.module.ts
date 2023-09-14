import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PswdForgetPageRoutingModule } from './pswd-forget-routing.module';

import { PswdForgetPage } from './pswd-forget.page';
import { RecaptchaModule } from 'ng-recaptcha';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PswdForgetPageRoutingModule,
    RecaptchaModule
  ],
  declarations: [PswdForgetPage]
})
export class PswdForgetPageModule {}
