import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { brandmodel } from './brand.module';

@Component({
  selector: 'app-brands-component',
  templateUrl: './brands-component.component.html',
  styleUrls: ['./brands-component.component.css']
})
export class BrandsComponentComponent {
  brandvalue:FormGroup =  new FormGroup({
    mobilename: new FormControl(),
    mobilemodel: new FormControl(),
    mobilemake: new FormControl(),
    mobileprice: new FormControl(),
  })
  brandobj:brandmodel=new brandmodel
  Brandlist:any =[]

  
  constructor(private form:FormBuilder, private api:ApiService ){}


  ngOnInit():void{


  }

    AddBrand(){
      this.brandobj.mobilename=this.brandvalue.value.mobilename;
      this.brandobj.mobilemodel=this.brandvalue.value.mobilemodel;
      this.brandobj.mobilemake=this.brandvalue.value.mobilemake;
      this.brandobj.mobileprice=this.brandvalue.value.mobileprice;
      this.api.postbrand(this.brandobj).subscribe({next:(v)=>{
        console.log(v);
      },
        error: (e: any) =>{
        console.log(e)
      },
      complete:()=>{
        console.log ("Product Added")
        alert("Product Added Successful")
      }})}

      Getbrand(){
        this.api.getbrand().subscribe(res=>{
          this.Brandlist=res;
        })

        }
      }
   
    



