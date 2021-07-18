import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',

})
export class ProduitsComponent implements OnInit {

  produits : produit[];
  

  constructor(private produitService: ProduitService ,private router :Router)
  
  {
    //this.produits = produitService.listeProduits();

  
  }

  ngOnInit(): void {
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
      });
  }
  supprimerProduit(p: produit)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
  console.log("produit supprimé");
  this.SuprimerProduitDuTableau(p);
  });
 
 
  }
  SuprimerProduitDuTableau(prod : produit) {
    this.produits.forEach((cur, index) => {
    if(prod.idProduit=== cur.idProduit) {
    this.produits.splice(index, 1);
    }
    });
    }
    
  

}
