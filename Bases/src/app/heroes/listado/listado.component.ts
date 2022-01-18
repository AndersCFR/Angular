import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListadoComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }
  heroes: string[] = ['Spiderman','Hulk','Doc Strange']
  heroeBorrado: string = '';
  borrarHeroe(){
    console.log('borrando')
      this.heroeBorrado = this.heroes.shift() || '';
  }
}
