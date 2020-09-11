import { Injectable } from '@angular/core';
import { Prodotto } from '../app.models';

@Injectable({
  providedIn: 'root'
})
export class ScontiService {
  public verificaScontiDelGiorno(prodotti: Prodotto[]): Prodotto[]{
    for(let j = 0; j<prodotti.length; j++){
      if(prodotti[j].categoria ==='Elettrodomestici'){
        prodotti[j].prezzo *= 0.8;
      }
    }
    return prodotti;
  }
}
