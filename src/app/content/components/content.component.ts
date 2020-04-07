import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data-service'
import { MailingService } from '../services/mailing/mailing-service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css','bootstrap.min.css']
})
export class ContentComponent implements OnInit {

  public dataSet: any=[];
  public country: string;
  public selection: string;
  public selection2: string;
  public newCases: number=0;
  public newDeaths: number=0;
  public totalCases: number=0;
  public totalDeaths: number=0;
  public totalRecovered: number=0;
  public totalActiveCases: number=0;

  public message: string;
  public email: string;

  public floor(x: number): number{
    return Math.floor(x);
  }

  public validateEmail(email: string){
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
  }

  public addEmail(){
    if(!this.validateEmail(this.email)){
      this.message="Your email address is not valid !";
    }else{
      //addingEmail
      this.mailingService.addEmail(this.email);
      this.message="email "+this.email+" added successfully !";
      this.email="";
    }
  }

  constructor(private service: DataService, private mailingService: MailingService) { 
 
  }

  ngOnInit(): void {
    this.service.getData().subscribe(v => {
      for(let val in v){
        this.dataSet.push(v[val]); 
        this.newCases+=parseInt(v[val].new_cases.replace(",",""));
        this.newDeaths+=parseInt(v[val].new_deaths.replace(",",""));
        this.totalCases+=parseInt(v[val].cases.replace(",",""));
        this.totalDeaths+=parseInt(v[val].deaths.replace(",",""));
        this.totalRecovered+=parseInt(v[val].total_recovered.replace(",",""));
        this.totalActiveCases+=parseInt(v[val].active_cases.replace(",",""));
      } 
    });
    console.log(this.dataSet);
  }

}
