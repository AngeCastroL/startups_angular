import { Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

export const routes: Routes = [
    {path:'registro-usuario',component:RegistroUsuarioComponent},
    {path:'proyecto',component:ProyectoComponent},
    {path:'login',component:LoginComponent},
    {path:'proyectos/:documento',component:ProyectosComponent},
];
