import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/authFake.service';
import { ToastService } from '../../core/services/toast.service';
import { Login } from '../interfaces/login.interface';
import { AppRoutes } from 'src/app/app-routes.constant';
import { AuthRoutes } from '../auth-routes.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

loginForm: FormGroup;
isLoading = false;

constructor(
  private formBuilder: FormBuilder,
  private authService: AuthService,
  private router: Router,
  private toastService : ToastService
) {
  // Inicializar loginForm en el constructor
  this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
}

ngOnInit() {
  // No es necesario inicializar loginForm aquí
}

  // Acceso conveniente para los campos del formulario
  get form() { return this.loginForm.controls; }


  async onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
 
    const login : Login = this.loginForm.value;

    try {
      const loggedIn = await this.authService.login(login);
     

      if (loggedIn) {
        this.toastService.showSuccessToast('Login Correcto')

        this.router.navigate([`${AppRoutes.PUBLIC}`]);
        
      } else {
        this.toastService.showDangerToast('Login Incorrecto revisa tus credenciales')
      }

    } catch (error) {
      this.toastService.showDangerToast('Login Incorrecto revisa tus credenciales')
      console.error('Error en el login:', error);
      // Manejar errores de autenticación aquí
    }
  }

  goToRegister(){
    this.router.navigate([`${AppRoutes.AUTH}/${AuthRoutes.REGISTER}`]);
  }

  goToForgot(){
    this.router.navigate([`${AppRoutes.AUTH}/${AuthRoutes.RECOVERPASS}`]);
  }
}
