import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RestriccionsService } from './restriccions.service';
import { RestriccionRoutingModule }     from './restriccionrouting/restriccionrouting.module';
import {BusyModule} from 'angular2-busy';



// Import the ButtonsModule...
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { LlistatComponent } from './llistat/llistat.component';
import { FilarestriccioComponent } from './filarestriccio/filarestriccio.component';
import { FiltreComponent } from './filtre/filtre.component';
import { DateRangePickDirective } from './filarestriccio/date-range-pick.directive';

@NgModule({
  declarations: [
    LlistatComponent,
    FilarestriccioComponent,
    TestComponent,
    HomeComponent,
    FiltreComponent,
    DateRangePickDirective,
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RestriccionRoutingModule,
    BusyModule
  ],
  
  providers: [RestriccionsService],
  bootstrap: [HomeComponent]
})
export class AppModule { }

