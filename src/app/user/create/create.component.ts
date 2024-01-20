import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;
   
  constructor(
    public userService: UserService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required)
    });
    this.validateForm();
  }

  validateForm(){

  }
   
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.userService.create(this.form.value)
      .subscribe((result: any) => {
         console.log('User created successfully!');
         this.router.navigateByUrl('users/list');
    })
  }

}
