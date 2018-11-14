import { Component, OnInit, Input } from '@angular/core';
import { User } from './User.model';

@Component({
  selector: 'app-mydate',
  templateUrl: './mydate.component.html',
  styleUrls: ['./mydate.component.css']
})
export class MydateComponent implements OnInit {

  @Input('user') userObj: User;
  isExpanded: boolean = true;

  name: string ;
 time: any = new Date();
 items: any[ ];
 today: string;
 constructor() {
   this.name = 'Inaaya';
   setInterval(() => {this.today = new Date().toDateString() + ' ' + new Date().toLocaleTimeString(); }, 1000);

 }
 ngOnInit() {
 }
 getData(): any [] {
    this.items = ['Book', 'Pencil', 'Pen', 'WaterBottel', 'Notebook', 'Bag', 858585];
   return this.items;

 }
 expandButton() {  this.isExpanded = !this.isExpanded;
 }
}
