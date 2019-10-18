import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  user: User = new User();
  constructor(private router: Router, private authSvc: AuthService) { }

  ngOnInit() { }

  async onForgot() {
    const user = this.authSvc.onForgot(this.user);
    if (user) {
      console.log('Se restablecio correctamente');
      this.router.navigateByUrl('/login');

    }
  }
}
