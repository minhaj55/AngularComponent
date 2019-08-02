import { Injectable } from '@angular/core';
import { User } from '../mydate/User.model';
import { Qoute } from '../qoute_modals/Quote';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QouteOperationService {
  qouteList: Observable<number>[];
constructor() {

    this.qouteList.push();
  }

getUserList(){
}
savePost( user: User)  {

}
deleteQuote( ) {}
}
