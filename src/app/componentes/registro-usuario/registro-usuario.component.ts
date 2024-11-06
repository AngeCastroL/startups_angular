import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistroUsuarioService } from '../../servicios/registro-usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RegistroUsuario } from '../../clases/registro-usuario';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent implements OnInit{

  registroForm : FormGroup;

  registroUsuario:RegistroUsuario[]=[]
   constructor(
    private registroUsuarioServicio:RegistroUsuarioService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ){
    this.registroForm=this.formBuilder.group({
      documento:['', Validators.required],
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
    this.listaUsuarios()
  }

  
  listaUsuarios(){
    this.registroUsuarioServicio.getUsuarioList().subscribe(
    data=>{
      this.registroUsuario=data
      console.log(this.registroUsuario)
    }
    )
  }

  crearUsuario(){
    const body = this.registroForm.value;
    this.registroUsuarioServicio.createUsuario(body).subscribe({
      next:response => {
        console.log('POST CORRECTO', response);
      },
      error:error => {
        console.log('POST INCORRECTO', error);
      }
    });
  }

  onSubmit(){
    
    this.crearUsuario();
    this.registroForm.reset()
  } 
}
