import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getData(): Observable<any>{
    
    return Observable.create(observer=>{
      let myHeaders = new Headers({
        "Content-Type": "text/plain",
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "6356e62fc7msh27272757a761a13p18e27cjsn8d58dbbf0f26",
      });
      
      
      let myRequest = new Request('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',
        { method: 'GET',
          headers: myHeaders,
          mode: 'cors',
          cache: 'default'
        }
      );

      
      fetch(myRequest)
      .then(response=>response.json())
      .then(data=>{
        observer.next(data.countries_stat);
        observer.complete();
      })
      .catch(function(err) {
        // Error :(
      });
    });
    
  }

}
