import { Injectable } from '@angular/core';
import { Prodotto } from '../app.models';
import { ScontiService } from './sconti.service';

@Injectable({
  providedIn: 'root',
})
export class ProdottiService {
  constructor(private servizioSconti: ScontiService) {}

  public estraiProdotti(): Prodotto[] {
    return this.servizioSconti.verificaScontiDelGiorno([
      {
        codice: 1,
        nome: 'Frigorifero Ignis XA',
        descrizione: 'Gelo Super',
        categoria: 'Elettrodomestici',
        prezzo: 1000,
        immagine: 'https://via.placeholder.com/150',
        disponibilita: true,
        dataProduzione: new Date(2018, 2, 1),
      },
      {
        codice: 2,
        nome: 'Televisore',
        descrizione: '4K',
        categoria: 'Elettrodomestici',
        prezzo: 1350,
        immagine: 'https://via.placeholder.com/150',
        disponibilita: true,
        dataProduzione: new Date(2019, 2, 1),
      },
    ]);
  }
}
