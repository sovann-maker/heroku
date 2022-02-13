import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  // POST GET PUT DELETE Method
  postMovie(data:any){
    return this._http.post<any>("https://moviesrepoapinodejs.herokuapp.com/", data).pipe(
      map(
        res => {
          return res;
        }
      )
    )
  }
  getMovie(){
    return this._http.get<any>("https://moviesrepoapinodejs.herokuapp.com/").pipe(
      map(
        res => {
          return res;
        }
      )
    )
  }
  putMovie(data:any,id:number){
    return this._http.put<any>("https://moviesrepoapinodejs.herokuapp.com/"+id, data).pipe(
      map(
        res => {
          return res;
        }
      )
    )
  }
  deleteMovie(id:number){
    return this._http.delete<any>("http://localhost:3000/movies/"+id).pipe(
      map(
        res => {
          return res;
        }
      )
    )
  }
}