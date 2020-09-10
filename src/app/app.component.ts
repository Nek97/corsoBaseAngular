import { Component } from '@angular/core';
import { Prodotto } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo Corso Angular';
  subtitle = 'Esercizio sui componenti';
  prodotti: Prodotto[] = [];

  constructor(){
    this.prodotti = this.estraiProdotti();
  }

  private estraiProdotti(): Prodotto[] {
    return [
      {id: 1, nome: 'Super TV Plus', categoria: 'Elettrodomestici',
       descrizione: 'il miglior televisore di sempre', prezzo: 1100,
       disponibile: true, dataProduzione: new Date(2018, 3, 1),
       urlImmagine: 'https://via.placeholder.com/150'},
       {id: 2, nome: 'Forno Microonde Plus', categoria: 'Elettrodomestici',
       descrizione: 'Economico e potente', prezzo: 200,
       disponibile: true, dataProduzione: new Date(2019, 7, 1),
       urlImmagine: 'https://via.placeholder.com/150'}
    ];
  }
}
