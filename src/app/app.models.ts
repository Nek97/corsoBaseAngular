export interface Prodotto {
  id: number;
  nome: string;
  categoria: string;
  descrizione: string;
  prezzo: number;
  disponibile: boolean;
  dataProduzione: Date;
  urlImmagine: string;
}
