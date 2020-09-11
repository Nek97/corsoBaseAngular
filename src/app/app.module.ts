import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdottiComponent } from './prodotti/lista-prodotti/lista-prodotti.component';
import { ConvertiBooleanoPipe } from './pipes/converti-booleano.pipe';
import { DettaglioProdottoComponent } from './prodotti/dettaglio-prodotto/dettaglio-prodotto.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdottiComponent,
    ConvertiBooleanoPipe,
    DettaglioProdottoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
