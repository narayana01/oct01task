import { Component, OnInit } from '@angular/core';
import { TableserviceService } from '../tableservice.service';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators'; 

@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.scss']
})
export class TableviewComponent implements OnInit {

  constructor(private ser:TableserviceService) { }

data:object;
idvalue:any;
na:any;
emai:any;
subscription:any;
  
  ngOnInit() {
   this.getemployee();
  }
getemployee(){

// this.ser.getdata().subscribe(res=>{ console.log("employee data",this.data=res);})
this.subscription=timer(0,10000).pipe(switchMap(()=>this.ser.getdata())).subscribe(res=>this.data=res)
  
}

func(t){
  this.idvalue=t.id;
  this.na=t.name;
  this.emai=t.email;
}


  
}