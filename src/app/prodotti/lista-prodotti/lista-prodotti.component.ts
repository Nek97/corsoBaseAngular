import { Component, Input } from '@angular/core';
import { Prodotto } from '../../app.models'

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.css']
})
export class ListaProdottiComponent{

  @Input() prodotti : Prodotto[] = [];
  prodottoSelezionato: Prodotto = null;

  mostraDettaglio(prodotto: Prodotto): void{
    this.prodottoSelezionato = prodotto;
  }

  messaggioRicevuto(messaggio: string): void{
    this.prodottoSelezionato = null;
  }
}
