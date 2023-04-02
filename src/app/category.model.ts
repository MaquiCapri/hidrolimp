export class Category {
    id: number;
    nombre: string;
   productos!: string; 

    constructor(id: number, nombre: string, productos: string) {
        this.id = id;
        this.nombre = nombre;
      
    }
}