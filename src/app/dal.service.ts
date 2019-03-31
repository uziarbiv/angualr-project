  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';

  @Injectable({
    providedIn: 'root'
  })
  export class DalService {

    constructor(private http : HttpClient) { }

    addData(url : string, data : any)
    {
      return this.http.post(url,data);
    }

    getData(url : string)
    {
      return  this.http.get<any[]>(url)
    }
  }

