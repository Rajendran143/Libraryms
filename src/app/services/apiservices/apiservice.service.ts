import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  //login api
  LoginDatapost(url: any, payload: any) {
    return this.http.post(url, payload)
  }


  get(url:any, header: any) {
    return this.http.get(url, header);
  }

  Post(url: any, payload: any, header: any) {
    return this.http.post(url, payload, header)
  }


  delete(url: any, body: any) {

    return this.http.delete(url, body)
  }
  // update(url: any) {
  //   var data: any = {
  //     "`userId`": 1,
  //     "id": 1,
  //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  //   }
  //   return this.http.put(url, data)
  // }

}



