import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDec'
})
export class FilterDecPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    if (!items) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    
    if(filter==="confirmed")items.sort((b,a)=>parseInt(a.cases.replace(",",""))-parseInt(b.cases.replace(",","")));
    else if(filter==="deaths")items.sort((b,a)=>parseInt(a.deaths.replace(",",""))-parseInt(b.deaths.replace(",","")));
    else items.sort((b,a)=>parseInt(a.total_recovered.replace(",",""))-parseInt(b.total_recovered.replace(",","")));
    return items;
  }   
}
