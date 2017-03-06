import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RestriccionsService } from './restriccions.service';
import { RestriccionRoutingModule }     from './restriccionrouting/restriccionrouting.module';

// Import the ButtonsModule...
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { LlistatComponent } from './llistat/llistat.component';
import { FilarestriccioComponent } from './filarestriccio/filarestriccio.component';
import { FiltreComponent } from './filtre/filtre.component';

@NgModule({
  declarations: [
    LlistatComponent,
    FilarestriccioComponent,
    TestComponent,
    HomeComponent,
    FiltreComponent    
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RestriccionRoutingModule,
  ],
  
  providers: [RestriccionsService],
  bootstrap: [HomeComponent]
})
export class AppModule { }

