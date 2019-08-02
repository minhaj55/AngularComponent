import { Injectable } from '@angular/core';
import { User } from '../mydate/User.model';
import { Qoute } from '../qoute_modals/Quote';

@Injectable({
  providedIn: 'root'
})
export class QouteOperationService {
  qouteList:Qoute[];
constructor() { }
getUserList(){}
savePost( user:User)  {
  

}
deleteQuote( ) {}
}
