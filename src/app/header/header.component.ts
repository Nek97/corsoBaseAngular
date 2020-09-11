import { Component } from '@angular/core';
import { ProdottiService } from '../services/prodotti.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public servizioProdotti: ProdottiService) {

  }


}
