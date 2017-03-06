import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Restriccio } from '../restriccio';
import {AppSettings} from '../filarestriccio/constants';
import { RestriccionsService } from '../restriccions.service';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css']
})


export class FiltreComponent implements OnInit {
 @Output() onFiltre: EventEmitter<Restriccio> = new EventEmitter();
  constructor(private restriccionsService: RestriccionsService) { }

 restric = new Restriccio();
 comboHores = AppSettings.HORES;
 comboAdults = AppSettings.ADULTS;
 comboNens = AppSettings.NENS;
 comboCotxets = AppSettings.COTXETS;
 comboOper = AppSettings.OPER;
 comboDies = AppSettings.DIES;



  ngOnInit() {
    this.restric = new Restriccio();
  }

  changeVal(){
    console.log( this.restric);
  //  if (this.restric.restriccions_data == null)  this.restric.restriccions_data=new Date("2011-01-01");
    if (this.restric.restriccions_datafi == null)  this.restric.restriccions_datafi=new Date("3011-01-01");

    if (this.restric.restriccions_nens==-1) this.restric.restriccions_nens=null;
    if (this.restric.restriccions_adults==-1) this.restric.restriccions_adults=null;
    if (this.restric.restriccions_cotxets==-1) this.restric.restriccions_cotxets=null;    
    this.onFiltre.emit(this.restric);
  }

  clearFiltre(){
    console.log( "clear");
    this.restric = new Restriccio();
    this.changeVal();
  }
}