import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // isAddingNewUser: boolean = false;
  // user = [];
  // constructor() { private userService.fetchUser
}

ngOnInit() {
  // this.userService.fetchUser()
  //   .subcribe(data = {
  //     this.user = data;
  //   });
}

onSubmit(){
  // this.user.push(newUser);
  // this.isAddingNewUser = false;
}

}
