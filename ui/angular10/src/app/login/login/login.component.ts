import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router,
              private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      alert('Giriş Başarılı :)' );
      this.router.navigate(['home']);
      this.invalidLogin = false;
    } else {

      this.invalidLogin = true;
      
      alert('Giriş Yapılamadı ! (Kullanıcı adı veya şifre hatalı)');
    }
  }
  

}
