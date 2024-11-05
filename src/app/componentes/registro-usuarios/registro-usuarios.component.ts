import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistroUsuarioService } from '../../servicios/registro-usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RegistroUsuario } from '../../clases/registro-usuario';


@Component({
  selector: 'app-registro-usuarios',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './registro-usuarios.component.html',
  styleUrl: './registro-usuarios.component.css'
})
export class RegistroUsuariosComponent implements OnInit {

  id: string | null = null;
  registroForm : FormGroup;

  constructor(
    private registroUsuarioServicio:RegistroUsuarioService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ){
    this.registroForm=this.formBuilder.group({
      documento:['', this.id ? Validators.required : null],
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      tipo_documento:['', Validators.required],
      usuario:['', Validators.required],
      contrasenia:['', Validators.required],
      correo:['', Validators.required],
      telefono:['', Validators.required],
      fecha_nacimiento:['', Validators.required]
    })
  }
  ngOnInit(): void {
    
  }

}
