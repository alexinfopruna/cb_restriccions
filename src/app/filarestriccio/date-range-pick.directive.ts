import { Directive, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DateRange } from './date-range';
import * as moment from 'moment/moment';


declare var $:any;

@Directive({
  selector: '[appDateRangePick]',
  //styles: ['.daterangepicker td.available.available.in-range {background-color: #357ebd;}']
})
export class DateRangePickDirective {
  @Input() options: Object = {  };
  @Output() selected: any = new EventEmitter();
  dateRange:DateRange=new DateRange({});

  constructor(private elementRef: ElementRef) {
    

  }

  ngOnInit() {



moment.locale('ca');
console.log(this.options);
    $(this.elementRef.nativeElement)
      .daterangepicker(this.options, this.dateCallback.bind(this));
  }

  

  dateCallback(start, end, label) {
    this.dateRange.startDate=start.format('YYYY-MM-DD');
    this.dateRange.endDate=end.format('YYYY-MM-DD');
    this.selected.emit(this.dateRange);
  }
}