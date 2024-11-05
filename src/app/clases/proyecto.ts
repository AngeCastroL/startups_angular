export class Proyecto {

    constructor(
        public usuarioId:string,
        public nombre:string,
        public descripcion:string,
        public estado:string,
        public categoria:string,
        public fecha_inicio:Date,
        public ubicacion:string
    ){}
}
