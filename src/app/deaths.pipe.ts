import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deaths'
})
export class DeathsPipe implements PipeTransform {

  transform(items: any[], deaths: string): any {
    if (!items) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    
    items.sort((a,b)=>a.deaths-b.deaths);
    return items;
  }

}
