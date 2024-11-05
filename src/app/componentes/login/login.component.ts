import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroUsuarioService } from '../../servicios/registro-usuario.service';
import { RegistroUsuario } from '../../clases/registro-usuario';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private registroUsuarioService: RegistroUsuarioService) {
  
    this.loginForm = this.fb.group({
      documento: ['', Validators.required],
      contrasenia: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  login() {
    if (this.loginForm.valid) {
      const documento = this.loginForm.value.documento;
      const contrasenia = this.loginForm.value.contrasenia;
      
      this.registroUsuarioService.login({documento, contrasenia}).subscribe({
        next: (response: RegistroUsuario) => {
          console.log('Inicio de sesión exitoso:', response);
          console.log(documento)
          
          this.router.navigateByUrl(`/proyectos/${documento}`);
        },
        error: (error) => {
          console.error('Error en el inicio de sesión:', error);
          this.errorMessage = error.error || 'Error en las credenciales';
        }
      });
    } else {
      this.errorMessage = 'Por favor, completa todos los campos requeridos.';
    }
  }
  onSubmit(){
    this.login()
  }
}
