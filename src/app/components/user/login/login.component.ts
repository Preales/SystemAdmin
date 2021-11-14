import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { User } from 'src/app/models/user';
import swal from 'sweetalert';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public user: User;
  constructor(
    private _route : ActivatedRoute,
    private _router : Router,
    private _userService: UserService
  ) {
    this.user = new User('', '', '', '');
  }

  ngOnInit(): void {
    localStorage.removeItem('token');
  }

  onSubmit() {
    this._userService.Login(this.user).subscribe(
      (resp: any) => {
        localStorage.setItem('token', resp.token);
        this._router.navigate(['/employee']);
      },
      error => {
        if(error.status == 400){
          swal("Error", "User or Password is incorrect", "error");
        }else{
          swal("Error", "Error al obtener token", "error");
        }        
        console.log(error);
      }
    );
  }
}
