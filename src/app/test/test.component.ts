import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Restriccio } from '../restriccio';
import {AppSettings} from '../filarestriccio/constants';
import { RestriccionsService } from '../restriccions.service';
import { Subject } from 'rxjs/Subject';
import {DateRangePickDirective} from '../filarestriccio/date-range-pick.directive';
import { DateRange } from '../filarestriccio/date-range';
import * as moment from 'moment';

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
 data:Date;

 comboHores = AppSettings.HORES;
 combobinHores = AppSettings.binHORES;
 comboAdults = AppSettings.ADULTS;
 comboNens = AppSettings.NENS;
 comboCotxets = AppSettings.COTXETS;
 comboOper = AppSettings.OPER;
 comboDies = AppSettings.DIES;


 hores:String[]=["Dona valors a les peticions per testejar les hores disponibles"];
  constructor(private restriccionsService: RestriccionsService) { }


dateRange:DateRange=new DateRange({});
 pickerOptions: Object;


  ngOnInit() {
  this.comboAdults.splice(17, 17);
  this.comboAdults.splice(0,1);
  this.comboNens.splice(7, 5);
  this.comboNens.splice(0,1);
  this.comboCotxets.splice(0,1);

this.restric.restriccions_adults=0;
this.restric.restriccions_nens=0;
this.restric.restriccions_cotxets=0;

this.pickerOptions = {
   'startDate':new Date(),
    'endDate':new Date(),
    "singleDatePicker": true,
    "inline":true,
    locale: {format: 'YYYY/MM/DD'}
};
}


  changeVal(){
    //console.log(this.restric);return;
    if (this.restric.restriccions_adults==0){
      alert("********* Has de poar adults més gran de zero!! ***********");
      return;
    }
          this.restriccionsService.testRestriccions(this.restric).then(restriccions => { 
          
            console.log(JSON.parse(restriccions._body).rules);
            this.hores=JSON.parse(restriccions._body).hores;
            this.query=JSON.parse(restriccions._body).query;
            this.rules=JSON.parse(restriccions._body).rules;
        });
        
  }

  dateSelected(dateRange:DateRange){
    this.dateRange=dateRange;
    this.restric.restriccions_data = dateRange.startDate;
    this.restric.restriccions_datafi = dateRange.endDate;


  }

}
