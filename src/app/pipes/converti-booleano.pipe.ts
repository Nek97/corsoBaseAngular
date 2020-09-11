import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertiBooleano'
})
export class ConvertiBooleanoPipe implements PipeTransform {

  transform(value: boolean): string {
    if(value){
      return 'Disponibile'
    }
    else{
      return 'Non disponibile'
    }
  }

}
