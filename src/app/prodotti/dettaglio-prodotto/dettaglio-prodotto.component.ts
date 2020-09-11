import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Prodotto } from 'src/app/app.models';

@Component({
  selector: 'app-dettaglio-prodotto',
  templateUrl: './dettaglio-prodotto.component.html',
  styleUrls: ['./dettaglio-prodotto.component.css']
})
export class DettaglioProdottoComponent{
  @Input() prodotto: Prodotto = null;
  @Output() mandaNotifica: EventEmitter <string> = new EventEmitter <string> ();

  tornaIndietro(): void{
    this.mandaNotifica.emit(this.prodotto.nome)
  }

}
