import { Directive, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DateRange } from './date-range';

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
    /*  */
this.options  = {
'singleDate' : true,
}

  

console.log(this.options);
//if (typeof this.options.startDate != undefined) console.log(this.options.startDate);

console.log('--------------------------------------------------');
console.log('--------------------------------------------------');
    $(this.elementRef.nativeElement)
      .daterangepicker(this.options, this.dateCallback.bind(this));
  }

  dateCallback(start, end, label) {
    /*
    let message = `
      New date range selected:
      ${start.format('YYYY-MM-DD')} to ${end.format('YYYY-MM-DD')}
      (predefined range: ${label})
    `;
    */
    this.dateRange.startDate=start.format('YYYY-MM-DD');
    this.dateRange.endDate=end.format('YYYY-MM-DD');
    this.selected.emit(this.dateRange);
  }
}