import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservices/apiservice.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  CategeryList:any;

  constructor(private Apiservice:ApiserviceService) { }

  ngOnInit(): void {
    this.ReadCategerty()
  }

  ReadCategerty(){
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " +token };
  this.Apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/readcatagory?username=${username}`,{headers,responseType:'json'})
  .subscribe((res=>{
  this.CategeryList=res
  console.log(this.CategeryList)
   
  }))
  }

}




