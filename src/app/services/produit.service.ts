import { Injectable } from '@angular/core';
import { produit } from '../model/produit.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiURL: string = 'http://localhost:8080/produits/api';
  produits : produit[]; 
  produit : produit;

  constructor(private http : HttpClient) 
  { 
    /*this.produits = [
    
    { idProduit : 2, nomProduit : "doliprane 500", prixProduit : 450, dateCreation : new Date("12/17/2010")},
    {idProduit : 3, nomProduit :"uciderma", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
     {idProduit : 4, nomProduit :"fersang", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}   
        
      ];*/
   
}
listeProduit(): Observable<produit[]>{
  return this.http.get<produit[]>(this.apiURL);


}
  

  ajouterProduit( prod: produit):Observable<produit>{
    return this.http.post<produit>(this.apiURL, prod, httpOptions);
    }
  
 

    supprimerProduit(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }

    

      consulterProdui(id: number): Observable<produit> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<produit>(url);
        }
        
        updateProduit(prod :produit) : Observable<produit>
        {
        return this.http.put<produit>(this.apiURL, prod, httpOptions);
        }
        

}


