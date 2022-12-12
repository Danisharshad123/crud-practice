import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl } from "@angular/forms";
import { Brands } from './brand.module';
@Component({
  selector: 'app-brands-component',
  templateUrl: './brands-component.component.html',
  styleUrls: ['./brands-component.component.css']
})
export class BrandsComponentComponent {

    Products:FormGroup = new FormGroup({
      mobilename : new FormControl(),
      mobilemodel : new FormControl(),
      mobilemake : new FormControl(),
      mobileprice : new FormControl(),
    })
    BrandsValue : Brands = new Brands;
  
  constructor(){}


  ngOnInit():void{
  
  }

}
      
      
   
    



