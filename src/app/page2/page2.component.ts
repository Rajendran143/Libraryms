import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  dataLists:any;
 
  constructor() { }

  ngOnInit(): void {
  
  }

  getData(){
    localStorage.getItem('tocken')
    this.dataLists=JSON.parse(localStorage.getItem('tocken'))
  }
  
}
