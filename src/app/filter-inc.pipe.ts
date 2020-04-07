import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterInc'
})
export class FilterIncPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    if (!items) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    
    if(filter==="confirmed")items.sort((a,b)=>parseInt(a.cases.replace(",",""))-parseInt(b.cases.replace(",","")));
    else if(filter==="deaths")items.sort((a,b)=>parseInt(a.deaths.replace(",",""))-parseInt(b.deaths.replace(",","")));
    else items.sort((a,b)=>parseInt(a.total_recovered.replace(",",""))-parseInt(b.total_recovered.replace(",","")));
    return items;
  }

}


