import { Injectable } from '@angular/core';
import { Prodotto } from '../app.models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  constructor(private httpClient: HttpClient){
  }

  public estraiProdotti(): Prodotto[] {
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

  public estraiProdottiOsservabili(): Observable<Prodotto[]> {
    return of(this.estraiProdotti());
  }

  public estraiProdottiDaApi(): Observable<Prodotto[]> {
    return this.httpClient.get<Prodotto[]>(environment.urlProdotti);
  }

  public estraiProdottoDaApi(idProdotto: number): Observable<Prodotto> {
    const url = `${environment.urlProdotti}/${idProdotto}`;
    return this.httpClient.get<Prodotto>(url);
  }

}
