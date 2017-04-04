import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'valorselect'})
export class ValorSelectPipe implements PipeTransform {
  transform(value: String): any {
   console.log("WWWW");
    if (value=="Tot") value =  " * ";
   // value.replace("<"," Més petit que ");
  //  value.replace(">"," Més gran que ");
    value="RRRR";
    return value;
  }
}
