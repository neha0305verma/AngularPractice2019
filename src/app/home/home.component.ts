import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../data-access.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private dataAccess:DataAccessService) { }
private movies;
private result;
  ngOnInit() {
     this.dataAccess.getData().subscribe(data => {
      console.log(data);
      this.movies=data;
      this.result=this.movies.results;
      console.log(this.result);
    });
    
    
  }

 }
