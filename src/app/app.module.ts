import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RestriccionsService } from './restriccions.service';
import { RestriccionRoutingModule }     from './restriccionrouting/restriccionrouting.module';
import {BusyModule, BusyConfig} from 'angular2-busy';
import 'hammerjs';
import { MaterialModule } from '@angular/material';

// Import the ButtonsModule...
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { LlistatComponent, DialogOverviewExampleDialog } from './llistat/llistat.component';
import { FilarestriccioComponent } from './filarestriccio/filarestriccio.component';
import { FiltreComponent } from './filtre/filtre.component';
import { DateRangePickDirective } from './filarestriccio/date-range-pick.directive';
//import { LongclickDirective } from './filarestriccio/longclick.directive';
//import { ValorSelectPipe } from './valorselectpipe';


@NgModule({
  declarations: [
    LlistatComponent,
    FilarestriccioComponent,
    TestComponent,
    HomeComponent,
    FiltreComponent,
    DateRangePickDirective,
    DialogOverviewExampleDialog,
    //LongclickDirective,
    //ValorSelectPipe
   
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RestriccionRoutingModule,
    MaterialModule
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [RestriccionsService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
