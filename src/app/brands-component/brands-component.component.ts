import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-brands-component',
  templateUrl: './brands-component.component.html',
  styleUrls: ['./brands-component.component.css']
})
export class BrandsComponentComponent {
  
  brandvalue! :FormGroup
  
  constructor(private form:FormBuilder ){}


  ngOnInit():void{

  }

}
