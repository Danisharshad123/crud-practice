import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private Api:HttpClient) { }
  
  Postdata(data:any){
    return this.Api.post<any>('http://localhost:3000/Posts/',data).pipe(
      map(
        (res =>
          {
            return res
          })
      ))}

    Getdata(){
        return this.Api.get<any>('http://localhost:3000/Posts/').pipe(
          map(
            (res =>
              {
                return res
              })
          ))}
          Putdata(data:any, id:number){
            return this.Api.put<any>('http://localhost:3000/Posts/'+id ,data).pipe(
              map(
                (res =>
                  {
                    return res
                  })
              ))}
            Deletedata(id:number){
                return this.Api.delete<any>('http://localhost:3000/Posts/'+id).pipe(
                  map(
                    (res =>
                      {
                        return res
                      })
                  ))}
    



}