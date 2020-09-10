import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdottiComponent } from './components/prodotti/lista-prodotti/lista-prodotti.component';
import { BooleanPipe } from './pipes/boolean.pipe';
import { DettaglioComponent } from './components/prodotti/dettaglio/dettaglio.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdottiComponent,
    BooleanPipe,
    DettaglioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
