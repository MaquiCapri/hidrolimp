import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  Productos = [
    {
      id: 1,
      nombre: "HIDROJET 701 Hidrolavadora Uso",
      precio: 81549,
      categoria: "hidrolavadoras",
      imagen: "assets/lutian701-300x300.jpg",
      descripcion: "Semi Profesional 7.8 Litros/Min 140 Bar Máx 2100 W 220 V",
    },
    {
      id: 2,
      nombre: "Paño 17' Negro para lava",
      precio: 2904,
      categoria: "accesorios",
      imagen: "assets/pañonegro-300x300.jpg",
      descripcion: "Lusty 400",


    }, {
      id: 3,
      nombre: "HIPPO WET Aspiradora Profesional",
      precio: 156042,
      categoria: "aspiradoras",
      imagen: "assets/hippo_wet_1-600x747.png",
      descripcion: " 1 Motor 1200 W Filtro de Agua Soteco Polvo/Líquido",


    }, {
      id: 4,
      nombre: "Filtro Aspiradora ",
      precio: 6152,
      categoria: "repuestos",
      imagen: "assets/FILTROTELA-300x300.jpeg",
      descripcion: "Conico S400",
      
    },
    {
      id: 5,
      nombre: "Anillo de Fondo S44 D15 ",
      precio: 3563,
      categoria: "repuestos",
      imagen: "assets/anilloip.jpg",
      descripcion: "",
    },
    {
      id: 6,
      nombre: "Pico Chato Rinconero Lanza",
      precio: 825,
      categoria: "accesorios",
      imagen: "assets/pico_chato36-300x300.jpg",
      descripcion: "Plana Aspiradora Soteco Gamma D.36",


    }, {
      id: 7,
      nombre: "HIDROJET 13 HP Nafta",
      precio: 313268,
      categoria: "hidrolavadoras",
      imagen: "assets/hidrojet_7nafta-300x300.png",
      descripcion: "Hidrolavadora Industrial 18 Lts/min 248 Bar",


    }, {
      id: 8,
      nombre: "Pico Chato Rinconero",
      precio: 1088,
      categoria: "accesorios",
      imagen: "assets/pico-rinconero-pico-pato-para-aspiradoras-D_NQ_NP_807934-MLA27632375059_062018-F-300x300.jpg",
      descripcion: "Plana Aspiradora Soteco Gamma D.38",
      
    },
    {
      id: 9,
      nombre: "Acople Rápido Macho 1/4",
      precio: 1561,
      categoria: "repuestos",
      imagen: "assets/acople-rapido3-300x300.jpg",
      descripcion: " Rosca hembra para Hidrolavadoras",
    },
    {
      id: 10,
      nombre: "Pico de Lavado",
      precio: 1960,
      categoria: "repuestos",
      imagen: "assets/PICO-300x274.jpg",
      descripcion: "Hidrolavadora Acero Tobera Varias Medidas",


    }, {
      id: 11,
      nombre: "Caño Extensión Plástico",
      precio: 2513,
      categoria: "repuestos",
      imagen: "assets/CAÑOEXTENSION-300x300.jpg",
      descripcion: "Aluminio D36 Soteco para Aspiradoras",


    }, {
      id: 12,
      nombre: "Filtro Esponja RedExtractor",
      precio: 750,
      categoria: "repuestos",
      imagen: "assets/filtroesponjared2.jpg",
      descripcion: "Hipo",
      
    },
    {
      id: 13,
      nombre: "Terminal con Encastre D38",
      precio: 1200,
      categoria: "repuestos",
      imagen: "assets/TERMINALENCASTRE-300x300.jpg",
      descripcion: "Ghibili Gamma CB30/60",
    },

   {
    id: 14,
    nombre: "Hidrojet 590 con carro",
    precio: 152500,
    categoria: "hidrolavadoras",
    imagen: "assets/hidrojet590carro-300x300.png",
    descripcion: "Hidrolavadora profesional 8 lts/min 100/130 Bar3HP",
    
  },
  {
    id: 15,
    nombre: "ASPIRO T510 ECO CASETINA",
    precio: 374979,
    categoria: "aspiradoras",
    imagen: "assets/T510.jpg",
    descripcion: "Aspiradora Industrial 3 HP 380V 60 lts Inox Solido/Liquido Monoturbina",
  },
  {
    id: 16,
    nombre: "Ventilador De Motor Hidrolavadora",
    precio:  5139,
    categoria: "repuestos",
    imagen: "assets/ventiladorbigbang-300x300.png",
    descripcion: "Big Bang Flash Interpump",
  },
  {
    id: 17,
    nombre: "Electrodo Para Caldera",
    precio:  6527,
    categoria: "repuestos",
    imagen: "assets/electrodo_omega-300x300.jpg",
    descripcion: "Hidrolavadora Omega 150 200 Original",
  },

   
  
  ];

}
