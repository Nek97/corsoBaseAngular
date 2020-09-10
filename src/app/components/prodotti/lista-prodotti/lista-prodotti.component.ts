import { Component, Input } from '@angular/core';
import { Prodotto } from '../../../app.models';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.css']
})
export class ListaProdottiComponent  {

  @Input() prodotti: Prodotto[] = [];
  @Input() prodottoSelezionato: Prodotto = null;
  messaggio = '';

  mostraDettagli(prodotto: Prodotto): void {
    this.prodottoSelezionato = prodotto;
  }

  notificaRicevuta(messaggio: string): void {
    this.prodottoSelezionato = null;
    this.messaggio = messaggio;
  }

}
