import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'PlatziSquare';
  lugares: any = [
    {plan: 'pagado',cercania:1, distancia:1,  active: true, nombre: 'Florería la Gardenia' },
    {plan: 'pagado',cercania:1, distancia:2,  active: true, nombre: 'Donas la pasadita' },
    {plan: 'gratuito',cercania:2, distancia:3,  active: true, nombre: 'Veterinaria Huellitas Felices' },
    {plan: 'gratuito',cercania:2, distancia:4,  active: false, nombre: 'Sushi Suhiroll' },
    {plan: 'gratuito',cercania:3, distancia:5,  active: true, nombre: 'Hotel la Gracia' },
    {plan: 'gratuito',cercania:3, distancia:6,  active: false, nombre: 'Zapatería  el Clavo' }
  ];
  constructor() {

  };
  lat: number = 51.678418;
  lng: number = 7.809007;
}
