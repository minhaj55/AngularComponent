import { Component, OnInit, Input } from '@angular/core';
import { User } from './User.model';

@Component({
  selector: 'app-mydate',
  templateUrl: './mydate.component.html',
  styleUrls: ['./mydate.component.css']
})
export class MydateComponent implements OnInit {

  @Input('user') userObj: User;
  isExpanded = true;

  name: string ;
 time: any = new Date();
 items: any[ ];
 today: string;
 constructor() {

 }
 ngOnInit() {
 }
 expandButton() {  this.isExpanded = !this.isExpanded;
 }
}
