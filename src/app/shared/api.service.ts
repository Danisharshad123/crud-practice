import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api:HttpClient) { }

  postbrand(data:any){
    return this.api.post<any>("http://localhost:3000/posts/",data).pipe(
      map(
        (res =>{
          return res
        }
        )))}
        getbrand(){
          return this.api.get<any>("http://localhost:3000/posts/").pipe(
            map(
              (res =>{
                return res
              }
              )))}
              putbrand(data:any,id:number){
                return this.api.put<any>("http://localhost:3000/posts/"+id,data).pipe(
                  map(
                    (res =>{
                      return res
                    }
                    )))}
                  deletebrand(id:number){
                      return this.api.delete<any>("http://localhost:3000/posts/"+id).pipe(
                        map(
                          (res =>{
                            return res
                          }
                          )))}
    }
