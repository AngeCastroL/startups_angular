import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../servicios/proyecto.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Proyecto } from '../../clases/proyecto';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css'
})
export class ProyectoComponent implements OnInit{

  registroForm : FormGroup;
  proyecto:Proyecto[]=[]

  constructor(
    private proyectoServicio:ProyectoService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ){
    this.registroForm=this.formBuilder.group({
      usuarioId:['', Validators.required],
      proyecto:this.formBuilder.group({
        nombre:['', Validators.required],
        descripcion:['', Validators.required],
        estado:['', Validators.required],
        categoria:['', Validators.required],
        fecha_inicio:['', Validators.required],
        ubicacion:['', Validators.required]
    })
    });
  }

  ngOnInit(): void {
    this.listaProyectos()
  }

  listaProyectos(){
    this.proyectoServicio.getProyectosList().subscribe(
      data => {
        this.proyecto=data
        console.log(this.proyecto)
      }
    )
  }

  crearProyecto(){
    const body =this.registroForm.value;
    
    this.proyectoServicio.crearProyecto(body).subscribe({
      next: response =>{
        console.log('POST CORRECTO',response)
      },
      error:error => {
        console.log('POST INCORRECTO', error);
      } 
    })
  }

  onSubmit(){
    this.crearProyecto();
  
  } 

}
