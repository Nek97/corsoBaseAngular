import { Component } from '@angular/core';
import { Prodotto } from './app.models';
import { ProdottiService } from './services/prodotti.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo Corso Angular';
  subtitle = 'Esercizio sui componenti';

  prodotti: Prodotto[] = [];

  constructor(public servizioProdotti: ProdottiService){
    this.servizioProdotti.estraiProdottiOsservabili()
    .subscribe(prodotti => this.prodotti = prodotti);
  }


}
