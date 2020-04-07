import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailingService {

  constructor() {}

  public addEmail(email: string){
    fetch('http://ec2-18-222-10-165.us-east-2.compute.amazonaws.com/api/addUser?email='+email, {
        mode: 'no-cors',
        method:'GET',
        headers: {
        'Accept': '*/*',
        }
      });
  }
}
