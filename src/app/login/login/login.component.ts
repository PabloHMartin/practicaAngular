import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  serverMessage: string;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
        this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.minLength(6), Validators.required]
      ],
    });
  }


  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }


    async onSubmit() {
      this.loading = true;

      const email = this.email.value;
      const password = this.password.value;


      // TODO pasar la info a storage y el router a posts
      localStorage.setItem('email', email);
      if(email == 'admin@mail.com'){
        localStorage.setItem('rol', 'admin');
      }
      localStorage.setItem('password', password);
      localStorage.setItem('isLogged', 'true');
      this.router.navigate(['/dashboard']);

      this.loading = false;
    }

}
