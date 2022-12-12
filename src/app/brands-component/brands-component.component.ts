import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl } from "@angular/forms";
import { ApiService } from '../shared/api.service';
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
    BrandList:any=[];
  
  constructor(private formBuilder:FormBuilder, private _api:ApiService){}


  ngOnInit():void{
  
  }


  Addbrand(){
    this. BrandsValue.mobilename= this.Products.value.mobilename;
    this. BrandsValue.mobilemodel= this.Products.value.mobilemodel;
    this. BrandsValue.mobilemake= this.Products.value.mobilemake;
    this. BrandsValue.mobileprice= this.Products.value.mobileprice;
    this._api.Postdata(this.BrandsValue).subscribe({next : (v) => {
      console.log(v);
    },
    error: (e) => {
      console.log(e)
     
    },
    complete:() => {
      console.log("Student Record Added!")
      alert("Student Record Added")
      
      
      this.GetStudent();
        this.BrandList.reset();
    }
     })}


     GetStudent(){
      this._api.Getdata().subscribe(res =>{
        this.BrandList=res;
      })
     }
    
     DeleteStudent(data:any){
      this._api.Deletedata(data.id).subscribe ({next : (v) => {
        console.log(v);
      },
      error: (e) => {
        console.log(e)
       
      },
      complete:() => {
        console.log("Student Record Delete!")
        alert("Student Record Delete")
        this.BrandList();
    
      }})}

      EditBrand(data:any){
        this.Products.controls["mobilename"].setValue(data.mobilename);
        this.Products.controls["mobilemodel"].setValue(data.mobilemodel);
        this.Products.controls["mobilemake"].setValue(data.mobilemake);
        this.BrandsValue.id = data.id;
      }

      UpdateBrand(){
        this. BrandsValue.mobilename= this.Products.value.mobilename;
        this. BrandsValue.mobilemodel= this.Products.value.mobilemodel;
        this. BrandsValue.mobilemake= this.Products.value.mobilemake;
        this. BrandsValue.mobileprice= this.Products.value.mobileprice;
        this._api.Postdata(this.BrandsValue).subscribe({next : (v) => {
          console.log(v);
        },
        error: (e) => {
          console.log(e)
         
        },
        complete:() => {
          console.log("Student Record Added!")
          alert("Student Record Added")
          
          
          this.GetStudent();
            this.BrandList.reset();
            this.BrandsValue.id = 0;
        }
         })}
    
      }
        
      
     
    
    

  
     
      
      
   
    



