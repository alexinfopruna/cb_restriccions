import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
//import {   OnChanges, SimpleChange} from '@angular/core';
import { Restriccio } from '../restriccio';
//import { Hero } from './hero';
import {AppSettings} from './constants';
import { RestriccionsService } from '../restriccions.service';
import { Subject } from 'rxjs/Subject';

import {DateRangePickDirective} from './date-range-pick.directive';
import { DateRange } from './date-range';


1
import * as moment from 'moment/moment';

declare var $:any;

@Component({
  selector: '[app-filarestriccio]',
  templateUrl: './filarestriccio.component.html',
  styleUrls: ['./filarestriccio.component.css'],
})




export class FilarestriccioComponent implements OnInit {
 @Input() restric:Restriccio;
 @Input() insert:Boolean;
 @Output() onDelete: EventEmitter<Restriccio> = new EventEmitter();
 @Output() onUpdate: EventEmitter<Restriccio> = new EventEmitter();
 @Output() onInsert: EventEmitter<Restriccio> = new EventEmitter();

 comboHores = AppSettings.HORES;
 comboAdults = AppSettings.ADULTS;
 comboNens = AppSettings.NENS;
 comboCotxets = AppSettings.COTXETS;
 comboOper = AppSettings.OPER;
 comboDies = AppSettings.DIES;

 disabled:Boolean = false;
 dirty: Boolean = true;
 checkBase:Boolean = true;

 dateRange:DateRange=new DateRange({});
 pickerOptions: Object;

constructor(private restriccionsService: RestriccionsService){}

 dateSelected(dateRange:DateRange) {
    this.dateRange=dateRange;
    this.restric.restriccions_data = dateRange.startDate;
    this.restric.restriccions_datafi = dateRange.endDate;

     this.updateRestriccio(this.restric);
  }


  ngOnInit() {
        this.disabled=!this.restric.restriccions_active;
 
if (typeof this.restric.restriccions_data == undefined) this.restric.restriccions_data = new Date("2011-01-01");
if (typeof this.restric.restriccions_datafi == undefined) this.restric.restriccions_datafi=this.restric.restriccions_data;
 
var dataIni = moment(this.restric.restriccions_data,'YYYY-MM-DD').format("YYYY-MM-DD");
var dataFi =  moment(this.restric.restriccions_datafi,'YYYY-MM-DD').format("YYYY-MM-DD");

//console.log(dataIni+ " --- "+ dataFi);

this.pickerOptions = {
    'showDropdowns': true,
    'showWeekNumbers': true,
    'timePickerIncrement': 5,
    'autoApply': true,
    "startDate": dataIni,
    "endDate": dataFi,
    locale: {
      format: 'YYYY-MM-DD'
    },
  };
        $(".data-ini").css("color", "red");
  }

changeBase(e){
// console.log(e);
  console.log(e.target.checked);
  if (e.target.checked) {
    this.restric.restriccions_data = new Date("2011-01-01");
    this.restric.restriccions_datafi = new Date("2011-01-01");
 //   
  }else{
        this.restric.restriccions_data = new Date();
        this.restric.restriccions_datafi = new Date();
  }

  this.updateRestriccio(this.restric);
}

changeVal(e){
  this.updateRestriccio(this.restric);
}

deleteRestriccio(restriccio:Restriccio){
  this.onDelete.emit(restriccio);
}

updateRestriccio(restriccio:Restriccio){
  console.log(restriccio);
   this.onUpdate.emit(restriccio);
}

insertRestriccio(restriccio:Restriccio){
   this.onInsert.emit(restriccio);
   restriccio.setNew();
  if (this.restric.restriccions_description== "%ins&") {
     this.insert = true;
     this.restric.restriccions_description="";}
  }
}