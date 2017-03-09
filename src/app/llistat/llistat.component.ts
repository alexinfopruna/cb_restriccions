import { Component, OnInit, OnChanges,ViewChild, SimpleChanges } from '@angular/core';

import { FilarestriccioComponent } from '../filarestriccio/filarestriccio.component';
import { FiltreComponent } from '../filtre/filtre.component';
import { RestriccionsService } from '../restriccions.service';
import { Restriccio } from '../restriccio';

@Component({
  selector: 'app-llistat',
  templateUrl: './llistat.component.html',
  styleUrls: ['./llistat.component.css']
})


export class LlistatComponent implements OnInit {
    @ViewChild(FilarestriccioComponent) childView: FilarestriccioComponent;
  
  title = 'Gestió de restriccions';
 
restriccions: Restriccio[];
restriccioNew:Restriccio = new Restriccio();
dataBase:Date=new Date('2011-01-01');

    constructor(private restriccionsService: RestriccionsService){
        this.restriccioNew.setNew();
      }

    ngOnInit() {
        this.getRestriccions();
      }

    test(){
        this.restriccionsService.test();
    }

    getRestriccions(){
        this.restriccionsService.getRestriccions().then(restriccions => { return this.restriccions=restriccions;} );
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
}
