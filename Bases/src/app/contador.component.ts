import { Component } from '@angular/core'
@Component({
  selector: 'app-contador',
  template: `
    <h1>Bases Angular</h1>
    Accediendo a la propiedad del component.ts
    <br>
    <h3>{{title}}</h3>
    <h3>La base es: <strong>{{base}}</strong></h3>
    <br>
    <button (click)="acumular(-base)">-{{base}}</button>
    <span>{{numero}}</span>
    <button  (click)="acumular(base)">+{{base}}</button>
  `
})
export class ContadorComponent{
  public title: string = 'Contador App';
  public numero: number = 10;
  public base: number = 5;

  acumular(valor: number){
    this.numero += valor;
  }
}
