import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StepOne';

  showmsg=true;
  ngSwithValue=4;

  users=[
    {Id:1,Name:"Jack"},
    {Id:2,Name:"Atif"},
    {Id:3,Name:"Manav"}
  ];
}
