import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Prodotto } from 'src/app/app.models';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent  {
  @Input() prodotto: Prodotto = null;
  @Output() lanciaNotifica: EventEmitter<string> = new EventEmitter<string>();

  tornaSu(): void{
    this.lanciaNotifica.emit(this.prodotto.nome);
  }

}
