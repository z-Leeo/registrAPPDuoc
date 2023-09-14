import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private isAuthenticated = false;
  private usuario: string | undefined;

  ingreso(usuario: string, password: string) {
    // Aquí iría la lógica de autenticación, por ejemplo, verificar credenciales
    if (usuario === 'nombre' && password === 'password') {
      this.isAuthenticated = true;
      this.usuario = usuario;
    } else {
      this.isAuthenticated = false;
    }
  }

  guardar(username: string, password: string) {
    // Aquí iría la lógica para registrar un nuevo usuario
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }

  getUsername() {
    return this.usuario;
  }

  constructor(private router: Router) { }


  public logout():void{
    localStorage.removeItem('usuario')
    this.router.navigate(['/login'])

  }
}
