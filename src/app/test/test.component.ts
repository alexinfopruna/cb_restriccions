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
   
/*
this.pickerOptions = {
    'showDropdowns': true,
    'showWeekNumbers': true,
    'timePickerIncrement': 5,
    'autoApply': false,
    "startDate": this.data,
    "endDate": this.data,
    'autoClose': false,
    'singleMonth': true,
    'singleDate' : true,
    'inline':true,
	
	alwaysOpen:true,
    locale: {
      format: 'YYYY-MM-DD',
    },
  };
*/
  this.pickerOptions = {
	singleMonth: true,
	showShortcuts: false,
	showTopbar: false,
selectForward: true,

    locale: {
      format: 'YYYY-MM-DD',
    },
  };
 
   //this.data = moment(this.data,'YYYY-MM-DD').format("YYYY-MM-DD");
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
