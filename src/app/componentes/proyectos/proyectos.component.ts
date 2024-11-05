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
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit{


  proyectos: Proyecto[] = [];
  documento :string = '';

  constructor(
    private proyectoServicio:ProyectoService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ){
  }

  ngOnInit(): void {
   
    this.route.paramMap.subscribe(params => {
      this.documento = params.get('documento') as string;
  
    // Llamar al método listaProyectos() pasando el documento
    this.proyectoServicio.getProyectosPorUsuario(this.documento).subscribe(
      (data) => {
        this.proyectos = data;  // Asignamos los proyectos a la propiedad `proyectos`
        
        console.log('Proyectos cargados:', this.proyectos);
      },
      (error) => {
        console.error('No se pudo consultar los proyectos', error);
      }
    );
  });
  }
  }
