export class Coffee {
  id: string;
  name: string;
  type: string;
  location: string;
  taste: string;
  height: number;
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
    this.name = nombre;
    this.type = tipo;
    this.location = region;
    this.taste = sabor;
    this.height = altura;
    this.imagen = imagen;
  }
}
