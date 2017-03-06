import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Restriccio } from '../restriccio';
import {AppSettings} from '../filarestriccio/constants';
import { RestriccionsService } from '../restriccions.service';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 @Output() onTest: EventEmitter<Restriccio> = new EventEmitter();
  
 restric = new Restriccio();
 rules: Restriccio[];
 query:String;
 data:Date = new Date();

 comboHores = AppSettings.HORES;
 comboAdults = AppSettings.ADULTS;
 comboNens = AppSettings.NENS;
 comboCotxets = AppSettings.COTXETS;
 comboOper = AppSettings.OPER;
 comboDies = AppSettings.DIES;


 hores:String[]=["Dona valors a les peticions per testejar les hores disponibles"];
  constructor(private restriccionsService: RestriccionsService) { }


  ngOnInit() {
   


  //  this.startDate = new Date(2017, 3, 24);
    //this.restric.restriccions_data = new Date("2017-03-20");
   
  }


  changeVal(){
          this.restriccionsService.testRestriccions(this.restric).then(restriccions => { 
          
            console.log(JSON.parse(restriccions._body).hores);
            this.hores=JSON.parse(restriccions._body).hores;
             this.query=JSON.parse(restriccions._body).query;
            
  this.rules=JSON.parse(restriccions._body).rules;
          
        } );
  }

}
