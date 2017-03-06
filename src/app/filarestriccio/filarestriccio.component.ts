import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
//import {   OnChanges, SimpleChange} from '@angular/core';
import { Restriccio } from '../restriccio';
//import { Hero } from './hero';
import {AppSettings} from './constants';
import { RestriccionsService } from '../restriccions.service';
import { Subject } from 'rxjs/Subject';

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


constructor(
    private restriccionsService: RestriccionsService
  ){}



  ngOnInit() {
        let  d:Date = new Date('2000-01-01');
        this.disabled=!this.restric.restriccions_active;
        //checkBase = 
  }


changeVal(e){
  /*
if (e.name=='options2') {
 if (e.checked) {
  this.restric.restriccions_data =  new Date("2011-01-01");
   this.restric.restriccions_datafi = this.restric.restriccions_data;

 }
 else {
  
     this.restric.restriccions_data = null;
    this.restric.restriccions_datafi = this.restric.restriccions_data;
 }
}
*/
  

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