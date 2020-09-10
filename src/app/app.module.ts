import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
