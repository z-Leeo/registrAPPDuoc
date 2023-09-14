import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnDestroy {


  qrCodeString = "Inscripción de asistencia"
  scannedResult: any;
  content_visibility = '';
  constructor(private router : Router) { }



  async checkPermission(): Promise<boolean> {
    try {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async startScan() {
    try {
      const permission = await this.checkPermission();
      if (!permission) {
        return;
      }
  
      const bodyElement = document.querySelector('body');
  
      if (bodyElement) {
        bodyElement.classList.add('scanner-active');
      }
  
      await BarcodeScanner.hideBackground();
      this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      BarcodeScanner.showBackground();
  
      if (bodyElement) {
        bodyElement.classList.remove('scanner-active');
      }
  
      this.content_visibility = '';
  
      if (result?.hasContent) {
        this.scannedResult = result.content;
        console.log(this.scannedResult);
      }
    } catch (e) {
      console.log(e);
      this.stopScan();
    }
  }
  stopScan() {
    const bodyElement = document.querySelector('body');
  
    if (bodyElement) {
      BarcodeScanner.showBackground();
      BarcodeScanner.stopScan();
      bodyElement.classList.remove('scanner-active');
      this.content_visibility = '';
    }
  }

  ngOnDestroy(): void {
    this.stopScan();
}
  

  volver(){
    this.router.navigate(['/home'])
  }

}
