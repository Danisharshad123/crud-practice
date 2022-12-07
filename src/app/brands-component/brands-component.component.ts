import { HttpClient } from '@angular/common/http';
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
  butononsave = true
  buttononupdate = false

  
  constructor(private form:FormBuilder, private api:ApiService){}


  ngOnInit():void{
    this.Getbrand();

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
        alert("Product Added Successful");
       this.Getbrand();
      }})}

      Getbrand(){
        this.api.getbrand().subscribe(res=>{
          this.Brandlist=res;
        })

        }
      DeleteBrand(data:any){
        this.api.deletebrand(data.id).subscribe({next:(v)=>{
          console.log(v);
        },
          error: (e: any) =>{
          console.log(e)
        },
        complete:()=>{
          console.log ("Product Added")
          alert("Product Added Successful");
         this.Getbrand();
        }})}
        editBrand(data:any){
          this.brandvalue.controls["mobilename"].setValue(data.mobilename);
          this.brandvalue.controls["mobilemodel"].setValue(data.mobilename);
          this.brandvalue.controls["mobilemake"].setValue(data.mobilename);
          this.brandvalue.controls["mobileprice"].setValue(data.mobilename);
          this.brandobj.id = data.id;
          this.showupdate();
        
        }
   

        Updatebrand(){
          
            this.brandobj.mobilename=this.brandvalue.value.mobilename;
            this.brandobj.mobilemodel=this.brandvalue.value.mobilemodel;
            this.brandobj.mobilemake=this.brandvalue.value.mobilemake;
            this.brandobj.mobileprice=this.brandvalue.value.mobileprice;
            this.api.putbrand(this.brandobj, this.brandobj.id).subscribe({next:(v)=>{
              console.log(v);
            },
              error: (e: any) =>{
              console.log(e)
            },
            complete:()=>{
              console.log ("Product Added")
              alert("Product Udate Successful");
             this.Getbrand();
             this.brandvalue.reset();
             this.showbuton();
             this.brandobj.id = 0
      

            }})}
            showbuton(){
              this.butononsave = true;
              this.buttononupdate = false;
              }
              showupdate(){
                this.butononsave = false;
                this.buttononupdate = true;
              }
        }
      
      
   
    



