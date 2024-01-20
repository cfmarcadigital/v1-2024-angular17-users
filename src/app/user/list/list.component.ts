import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  users: User[] = [];

  constructor(public userService: UserService,
              public router: Router){}

  ngOnInit():void{
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers()
      .subscribe((result: User[])=>{
        this.users = result;
      })
  }

  deleteUser(id: number){
    this.userService.delete(id)
      .subscribe((result) => {
        console.log('User deleted successfully!');
        this.router.navigateByUrl('users/list');
      })
  }

}
