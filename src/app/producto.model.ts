import { FileHandle } from "./model/file-handle.model";


export class Producto {
    id!: number;
    nombre: string;
    precio: string;
    descripcion: string;
   // imagen: string;
    category: any;
    productImages: FileHandle[]

    constructor(id: number, nombre: string, precio: string, descripcion: string, category:any) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.category = category;
    }
}