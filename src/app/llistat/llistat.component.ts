import { Component, ViewContainerRef, OnInit, OnChanges,ViewChild, SimpleChanges } from '@angular/core';

import { FilarestriccioComponent } from '../filarestriccio/filarestriccio.component';
import { FiltreComponent } from '../filtre/filtre.component';
import { RestriccionsService } from '../restriccions.service';
import { Restriccio } from '../restriccio';

import { MaterialModule } from '@angular/material';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';



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

    constructor(private restriccionsService: RestriccionsService, public dialog: MdDialog    ){
        this.restriccioNew.setNew();
      }

    ngOnInit() {
        this.getRestriccions();
      }

    test(){
        this.restriccionsService.test();
    }



    getRestriccions(){
      this.toggleLoading();
        this.restriccionsService.getRestriccions().then(restriccions => { this.toggleLoading(false);return this.restriccions=restriccions;} );
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
      this.restriccionsService.insertRestriccio(restriccio).then(restriccions => {  this.getRestriccions();         } );
    }

    onFiltre(restriccio){
      console.log("onFiltre");
      console.log(restriccio);
      this.restriccionsService.filtreRestriccions(restriccio).then(restriccions => { return this.restriccions=restriccions;} );
    }  

      toggleLoading(l:Boolean=true){
        this.loading=l;
      //  if(l) this.dialog.open(DialogOverviewExampleDialog);
       // else this.dialog.closeAll();
      }

      openDialog() {
    this.dialogRef = this.dialog.open(DialogOverviewExampleDialog);
    this.dialogRef.componentInstance.param1 = "test value";
    this.dialogRef.componentInstance.restriccioNew = this.restriccioNew;
     this.dialogRef.afterClosed().subscribe(result => {
       console.log(result);
       console.log(this.restriccioNew);
       if (result=="Save") this.onInsert(this.restriccioNew)
      this.dialogRef = null;});
  }


}






