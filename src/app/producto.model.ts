export class Producto {
    id: number;
    nombre: string;
    precio: number;
    categoria: string;
    descripcion: string;
    imagen: string;

    constructor(nombre: string, id: number, precio: number, categoria: string, descripcion: string, imagen: string) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.imagen = imagen;

    }
}