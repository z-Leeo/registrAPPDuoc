import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrcodePageRoutingModule } from './qrcode-routing.module';

import { QrcodePage } from './qrcode.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrcodePageRoutingModule,
    QRCodeModule
  ],
  declarations: [QrcodePage]
})
export class QrcodePageModule {}
