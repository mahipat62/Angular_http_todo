import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'http';
  //httpClient: any;
constructor(private http: HttpClient){

}
ngOnInit(): void {

}


getdata(){
  this.http.get('http: /139.59.85.105:4040/get_todos').subscribe((res)=>{
    console.log(res);
});
}

adddata(){
  this.http.post('http://139.59.85.105:4040/add_todos',{status:"false",
  timestamp:"15603340.002",
  title:"mahi"
    }).subscribe((res)=>{
    console.log(res);
});
}


update(){
this.http.get('http://139.59.85.105:4040/update_todos',{
  title:"mahesh",
  todo_id:"4x5s5s"
}).subscribe((res)=>{
  console.log(res);
});
}

delete(){
  this.http.post('http://139.59.85.105:4040/delete_todos',{
    title:"mahesh",
    todo_id:"4x5s5s"
  }).subscribe((res)=>{
    console.log(res);
  });
  }

}

