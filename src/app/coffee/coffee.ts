export class Coffee {
  id: string;
  nombre: string;
  tipo: string;
  region: string;
  sabor: string;
  altura: number;
  imagen: string;

  constructor(
    id: string,
    nombre: string,
    tipo: string,
    region: string,
    sabor: string,
    altura: number,
    imagen: string,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.region = region;
    this.sabor = sabor;
    this.altura = altura;
    this.imagen = imagen;
  }
}
