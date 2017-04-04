import { Component, ViewContainerRef, OnInit, OnChanges,ViewChild, SimpleChanges } from '@angular/core';
//import { ValorSelectPipe } from '../valorselectpipe';
import { FilarestriccioComponent } from '../filarestriccio/filarestriccio.component';
//import { FiltreComponent } from '../filtre/filtre.component';
import { RestriccionsService } from '../restriccions.service';
import { Restriccio } from '../restriccio';
import {AppSettings} from '../filarestriccio/constants';
import { MaterialModule } from '@angular/material';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';

import {DateRangePickDirective} from '../filarestriccio/date-range-pick.directive';
import { DateRange } from '../filarestriccio/date-range';
import * as moment from 'moment/moment';


@Component({
  selector: 'insert-restriccio',
 // template: '<md-dialog-content><md-spinner></md-spinner></md-dialog-content>',
  templateUrl: 'insert-restriccio.component.html',
  styles:[` md-spinner{height:0px;width:0px;}`],
})
export class DialogOverviewExampleDialog {
 param1: string;
 
  constructor(public dialogRef: MdDialogRef<any>) { }
}


@Component({
  selector: 'app-llistat',
  templateUrl: './llistat.component.html',
  styleUrls: ['./llistat.component.css']
})


export class LlistatComponent implements OnInit {
    @ViewChild(FilarestriccioComponent) childView: FilarestriccioComponent;
  
  title = 'Gestió de restriccions';
 dialogRef: MdDialogRef<any>;
restriccions: Restriccio[];
restriccioNew:Restriccio = new Restriccio();
dataBase:Date=new Date('2011-01-01');
loading:Boolean=false;

restric:Restriccio = new Restriccio();



comboHores = AppSettings.HORES;
 combobinHores = AppSettings.binHORES;
 comboSuma = AppSettings.SUMA;
 comboAdults = AppSettings.ADULTS;
 comboNens = AppSettings.NENS;
 comboCotxets = AppSettings.COTXETS;
 comboOper = AppSettings.OPER;
 comboDies = AppSettings.DIES;

dateRange:DateRange=new DateRange({});
 pickerOptions: Object;
 
    constructor(private restriccionsService: RestriccionsService, public dialog: MdDialog    ){
        //this.restriccioNew.setNew();
      }

    ngOnInit() {
this.dateRange.startDate =new Date('2011-01-01');
this.dateRange.endDate=new Date('2011-01-01');

 this.restric.restriccions_data=new Date('2011-01-01');
 this.restric.restriccions_datafi=new Date('2011-01-01');
 this.restric.restriccions_suma="5";
 this.restric.restriccions_adults="Tot";
 this.restric.restriccions_nens="Tot";
 this.restric.restriccions_cotxets="Tot";

 

 this.pickerOptions = {
  //  "singleDatePicker": true,
  'startDate': this.restric.restriccions_data,
  'endDate': this.restric.restriccions_datafi,

  //  "inline":true,
    locale: {
format: 'YYYY/MM/DD',
}
};
  



 this.getRestriccions(); 
      }
 dateSelected(dateRange:DateRange) {
    this.dateRange=dateRange;
    this.restric.restriccions_data = dateRange.startDate;
    this.restric.restriccions_datafi = dateRange.endDate;

    //this.updateRestriccio(this.restric);
  }


changeBase(e){
// console.log(e);
  console.log(e.target.checked);
  if (e.target.checked) {
    this.restric.restriccions_data = new Date("2011-01-01");
    this.restric.restriccions_datafi = new Date("2011-01-01");
 //   
  }else{
      //  this.restric.restriccions_data = new Date();
      //  this.restric.restriccions_datafi = new Date();
  }

  //this.updateRestriccio(this.restric);
}


    test(){
        this.restriccionsService.test();
    }


    getRestriccions(){
      this.toggleLoading();
     //   this.restriccionsService.getRestriccions().then(restriccions => { this.toggleLoading(false);return this.restriccions=restriccions;} );
     this.onFiltre(this.restric);
    }

    onDelete(restriccio){
      console.log("onDelete");
      if (!confirm("Esborrar registre (No es pot desfer)?")) return;
      this.restriccionsService.deleteRestriccio(restriccio).then(restriccions => { this.getRestriccions(); return this.restriccions=restriccions;} );
    } 
    
    onUpdate(restriccio){
      console.log("onUpdate");
      this.restriccionsService.updateRestriccio(restriccio).then(restriccions => { this.getRestriccions();       });
    }  

    onInsert(restriccio){
      console.log("onInsert");
      console.log(restriccio);
     
      this.restriccionsService.insertRestriccio(restriccio).then(restriccions => {  this.getRestriccions();         } );
    }

    onFiltre(restriccio){
      console.log("onFiltre");
      console.log(restriccio);
      
      this.restriccionsService.filtreRestriccions(restriccio).then(restriccions => { this.toggleLoading(false);return this.restriccions=restriccions;} );
    }  

      toggleLoading(l:Boolean=true){
        this.loading=l;
      }

      openDialog() {
    this.dialogRef = this.dialog.open(DialogOverviewExampleDialog);
    this.dialogRef.componentInstance.param1 = "test value";
 this.restriccioNew.restriccions_adults="5";
 this.restriccioNew.restriccions_nens="0";
 this.restriccioNew.restriccions_cotxets="0";
     this.restriccioNew.restriccions_data = new Date("2011-01-01");
    this.restriccioNew.restriccions_datafi = new Date("2011-01-01");
    this.restriccioNew.restriccions_dies = [0,0,0,0,0,1,1];



    this.dialogRef.componentInstance.restriccioNew = this.restriccioNew;
     this.dialogRef.afterClosed().subscribe(result => {
       if (result=="Save") this.onInsert(this.restriccioNew)
      this.dialogRef = null;});
  }


    reset(){
      this.restric.restriccions_adults="Tot";
      this.restric.restriccions_nens="Tot";
      this.restric.restriccions_cotxets="Tot";
      this.restric.restriccions_suma="6";
    }

    changeVal(){
      this.toggleLoading();

       //alert(this.restric.restriccions_adults);
      this.onFiltre(this.restric);
    }

    selectAll(){

        this.restriccions.forEach((element) => {if (element.restriccions_active) element.restriccions_checked=true;} );
    }

    assignaHores(){
        this.restriccions.forEach((element) => {if (element.restriccions_checked) element.restriccions_hores= this.restric.restriccions_hores.slice(0);} );
    }


    func2(event){
      let inn = parseInt(event.target.id.split("-")[1]);
      inn +=2;

      for (let i=0;i<inn;i++){
          this.restric.restriccions_hores[i]=0;
      }
      for (let i=inn-1;i<27;i++){
          this.restric.restriccions_hores[i]=1;
      }
    }    
}