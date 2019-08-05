import { Component, OnInit} from '@angular/core';
import { User } from '../qoute_modals/User.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import { visitValue } from '@angular/compiler/src/util';

@Component({
  selector: 'app-post-qoute',
  templateUrl: './post-qoute.component.html',
  styleUrls: ['./post-qoute.component.css'],
})
export class PostQouteComponent implements OnInit {
  user: User;
  quoteForm: FormGroup;
  userList: Set<User> = new Set();
  qouteList: User[];
  constructor(private form: FormBuilder,
              private messageService: MessageService) {

   }
   ngOnInit() {
     this.quoteForm = this.createPostQuoteForm();
     this.qouteList = [] as Array<User>;
     this.getUserList();
    }
createPostQuoteForm() {
  return this.form.group({
    username: ['', Validators.required],
    email: ['', Validators.email],
    qoute: ['', Validators.required]
  });
}
  getUserList(): any {
     this.userList.values();
  }
  savePost(qoute: FormGroup)  {
    if (qoute.value) {
      this.user = qoute.value;
      this.user.likes = 0; this.user.dislikes = 0;
      this.qouteList.push(this.user);

    // this.userList.add(this.user);
    this.messageService.add({severity: 'error', summary: 'Success', detail: 'Your Qoute Posted'});
    this. getUserList();
    this.quoteForm.reset();
   }
}
deleteQuote( user: User) {
  const obje = this.qouteList.find(data => user.userName === data.userName);
  this.qouteList.splice(this.qouteList.indexOf(obje), 1);
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Your Qoute Deleted'});
    this. getUserList();
  // }
}
addLike(user) {user.likes++; }
addDislike(user) { user.dislikes++; }

}
