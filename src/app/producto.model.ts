

export class Producto {
    id!: number;
    nombre: string;
    precio: string;
    descripcion: string;
    imagen: string;
    category: any;

    constructor(id: number, nombre: string, precio: string, descripcion: string, imagen: string, category:any) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.category = category;
        
    }
}