import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Restriccio } from './restriccio';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';





@Injectable()
export class RestriccionsService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private restriccionsUrl = 'http://cbwp-localhost/cb-reserves/taules/Restriccions.php';  // URL to web api
  constructor(private http: Http) {
    let url = window.location.hostname;
    
    switch( url){
      case 'www.can-borrell.com':
          this.restriccionsUrl = 'http://www.can-borrell.com/cb-reserves/taules/Restriccions.php';
          break; 
      case 'can-borrell.com':
          this.restriccionsUrl = 'http://can-borrell.com/cb-reserves/taules/Restriccions.php'; 
      break;
      case 'dev.can-borrell.com':
        this.restriccionsUrl = 'http://dev.can-borrell.com/cb-reserves/taules/Restriccions.php'; 
      break;
      default:
        this.restriccionsUrl = 'http://cbwp-localhost/cb-reserves/taules/Restriccions.php'; 
        
    }
//console.log("HOST..." + this.restriccionsUrl );

   }

  /* */
    test(){
      console.log("test");
      this.http.get('http://cbwp-localhost/cb-reserves/taules/Restriccions.php')
      .toPromise()
      .then(response => {console.log(response.json().data);return response.json().data})
    }
 

  getRestriccions():Promise<Restriccio[]>{
    const url = `${this.restriccionsUrl}`;
    return this.http.get(url)
      .toPromise()
      .then(response => {
        return response.json().data
      })
      .catch(this.handleError);              
  }


  filtreRestriccions(restriccio:Restriccio):Promise<Restriccio[]>{
    const url = `${this.restriccionsUrl}`;
    let dades = {data:restriccio,accio:'getrestriccions'};
    return this.http.post(url, JSON.stringify(dades), {headers: this.headers})
        .toPromise()
        .then(response => {
          return response.json().data
        })
        .catch(this.handleError);              
  }


  deleteRestriccio(restriccio:Restriccio){
    const url = `${this.restriccionsUrl}`;
    let dades = {data:restriccio,accio:'deleterestriccio'};

        return this.http.post(url, JSON.stringify(dades), {headers: this.headers})
          .toPromise()
          .then(response => { return response.json().data})
          .catch(this.handleError);  
  }


  updateRestriccio(restriccio: Restriccio){
    let url = `${this.restriccionsUrl}`;
    //url = 'http://www.can-borrell.com/cb-reserves/taules/Restriccions.php';
    
    let dades = {data:restriccio,accio:'updaterestriccio'};
    //console.log("pssssssssss");
    //console.log(JSON.stringify(dades));
     return this.http
      .post(url, JSON.stringify(dades), {headers: this.headers})
      .toPromise()
      .then(() => restriccio)
      .catch(this.handleError);   
  }


  insertRestriccio(restriccio: Restriccio){
    const url = `${this.restriccionsUrl}`;
    let dades = {data:restriccio,accio:'insertrestriccio'};

     return this.http
      .post(url, JSON.stringify(dades), {headers: this.headers})
      .toPromise()
      .then(() => restriccio)
      .catch(this.handleError);   
  } 


  testRestriccions(restriccio: Restriccio){
      const url = `${this.restriccionsUrl}`;
      let dat={data:new Date('2011-01-01'),adults:0,nens:0,cotxets:0};
      
        dat.data = restriccio.restriccions_data || new Date('2011-01-01');
        dat.adults = restriccio.restriccions_adults || 0;
        dat.nens=restriccio.restriccions_nens || 0;
        dat.cotxets=restriccio.restriccions_cotxets || 0;
        let dades = {'data':dat,'accio':'horesdisponibles'};

        return this.http
          .post(url, JSON.stringify(dades), {headers: this.headers})
          .toPromise()
          .then((resposta) =>  {console.log(resposta);return resposta;})
          .catch(this.handleError);   
  }

  private handleError(error: any): Promise<any> {
  //  alert("ERROR " + error + "\n\n Assegura't d'estar logat al panel per accedir a la gestió de restriccions");
    console.error('An error occurred', error); // for demo purposes only
    
    document.write("ERROR --> Assegura't d'estar logat al panel per accedir a la gestió de restriccions");
    return Promise.reject(error.message || error);
  }
}