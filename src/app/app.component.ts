import { Component } from '@angular/core';
import { Prodotto } from './app.models';
import { ProdottiService} from './services/prodotti.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public servizio : ProdottiService){}
}
