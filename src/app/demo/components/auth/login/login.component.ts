import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/login/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {

  username: string = "";
  password: string = "";

  //Constructor para inyectar el service que creamos
  constructor(private authService: AuthService, private router: Router){}

  login(): void{
    this.authService.login(this.username, this.password).subscribe({
      next: ()=> this.router.navigate(['/dashboard/default']),
      error: (err) => console.error("login fallido", err)
    })
  }
}
