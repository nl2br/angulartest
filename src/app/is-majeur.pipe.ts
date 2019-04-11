import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isMajeur'
})
export class IsMajeurPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let toReturn: string = ''
    if(value>=18){
      toReturn = 'Majeur'
    }else{
      toReturn = 'Mineur'
    }
    return toReturn
  }

}
