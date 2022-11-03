import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pageOneData:any=[
    {
      name:'Rajendran',
      email:'rajendran@123',
      number:8217445287
    },
    {
      name:'Sujay',
      email:'sujay@123',
      number:8217445287
    },

    {
      name:'Govardhan',
      email:'govardhan@123',
      number:8217445287
    },
  ]
  
  Add(){
    localStorage.setItem('tocken',JSON. stringify(this.pageOneData))
  }
  
}
