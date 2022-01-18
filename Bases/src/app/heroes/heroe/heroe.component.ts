import {Component} from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
  styleUrls: ['../../app.component.css']
})

export class HeroeComponent{
  public nombre: string = 'Spider-Man';
  public edad: number = 23;
  obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}`;
  }

  get nombreCapitalizado(): string{
    return this.nombre.toUpperCase();
  }

  cambiarNombre():void{
    this.nombre = 'Doctor Strange';
  }

  cambiarEdad(): void{
    this.edad = 35;
  }

}
