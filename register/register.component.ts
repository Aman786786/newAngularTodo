import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = new User();
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) {}
  ngOnInit(): void {}

  onSubmit() {
    console.log(this.user.name);
    console.log(this.user.contact);
    console.log(this.user.email);
    console.log(this.user.password);

    this._service.registerUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('response recived');
        this._router.navigate(['/login']);
      },
      (error) => {
        console.log('error occured');
        this.msg = 'Bad credentials, please enter valid details';
      }
    );
  }
}
