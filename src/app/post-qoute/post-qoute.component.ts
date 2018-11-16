import { Component, OnInit, Input } from '@angular/core';
import { User } from './User.model';

@Component({
  selector: 'app-post-qoute',
  templateUrl: './post-qoute.component.html',
  styleUrls: ['./post-qoute.component.css']
})
export class PostQouteComponent implements OnInit {
  action: string;
  actionColor: string;
  user: User;
  userList: Set<User> = new Set();
  constructor() {
   }

    getUserList(): any {
    return this.userList.values();
  }
  createUser(name, email, quote)  {
  this.user = new User(name, email, quote);
    this.userList.add(this.user);
    this.action = 'Posted Success';
    this.actionColor = 'green';
}
deleteQuote( user) {
  this.userList.delete(user);
  this.action = 'Deleted Success';
  this.actionColor = 'red';
}

 ngOnInit() {
  }
}
