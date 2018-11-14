import { Component } from '@angular/core';
import { User } from './mydate/User.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  title = 'AngularComponent';
  constructor() {
    this.user = new User();
    this.user.name = 'Minhaj Ahmed';
    this.user.city = 'Hyderbad';
    this.user.designation = 'Software Developer';
    this.user.mobile = 9874563210;

  }
}
