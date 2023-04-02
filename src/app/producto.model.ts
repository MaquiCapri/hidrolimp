export class Producto {
    id: number;
    nombre: string;
    categoria: string;
    precio: string;
    descripcion: string;
    imagen: string;

    constructor(id: number, nombre: string, categoria: string, precio: string, descripcion: string, imagen: string) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;

    }
}