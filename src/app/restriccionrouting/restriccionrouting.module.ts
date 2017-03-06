import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from '../test/test.component';
import { LlistatComponent } from '../llistat/llistat.component';

const routes: Routes = [
  { path: '', redirectTo: '/llistat', pathMatch: 'full' },
   { path: 'llistat', component: LlistatComponent},
    { path: 'test', component: TestComponent },
 // { path: 'test/:id', component: TestComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RestriccionRoutingModule { }