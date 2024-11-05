export class RegistroUsuario {

    constructor(private documento:string,
        private nombre:string,
        private apellido:string,
        private tipo_documento:string,
        protected usuario:string,
        protected contrasenia:string,
        protected correo:string,
        private telefono:string,
        private fecha_nacimiento:Date){}        
}
