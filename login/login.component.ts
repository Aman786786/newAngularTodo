import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';

  // two way binding to fatch data from UI
  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit() {}

  loginUser() {
    console.log(this.user.email);
    console.log(this.user.password);

    this._service.loginUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('response recived');
        this._router.navigate(['/loginsuccess']);
      },
      (error) => {
        console.log('error occured');
        this.msg = 'Bad credentials, please enter valid emaild and password';
      }
    );
  }
}
