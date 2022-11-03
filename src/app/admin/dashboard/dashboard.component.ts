import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { threadId } from 'worker_threads';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private location: PlatformLocation,
    private router : Router)
  {

  }
  ngOnInit(): void {
  }
  ngOnDestroy() : void{
    console.log("dfrtgyuio")
  this.router.navigate(["/admin"])
  }

}
