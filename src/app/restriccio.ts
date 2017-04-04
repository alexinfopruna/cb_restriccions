export class Restriccio{
    restriccions_id: number;
restriccions_adults: String;
restriccions_nens: String;  
restriccions_cotxets: String;
restriccions_data: Date;
    restriccions_hora: string;
    
   restriccions_datafi: Date;
    restriccions_suma: String;
    restriccions_dies: number[];
    restriccions_active: boolean;
    restriccions_checked: boolean=false;
    restriccions_description: string;
    restriccions_hores: number[]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1];

    constructor(){
this.restriccions_data = new Date("2011-01-01");
this.restriccions_datafi = new Date("2011-01-01");


    }

    public setNew(){
    this.restriccions_id=0;
this.restriccions_adults=0;
this.restriccions_nens=0;  
this.restriccions_cotxets=0;
this.restriccions_data;;
    this.restriccions_hora='11:00';
   this.restriccions_datafi;
    this.restriccions_dies=[0,0,0,0,0,0,1,1];
    this.restriccions_active = false;
    this.restriccions_description= "";
    }
}