import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hidePassword: boolean = true;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.form.value.user == 'prueba' && this.form.value.password == 'prueba') {
      // Redireccionamos a otra página.
    } else {
      this.openLoginErrorSnackBar();
    }
  }

  openLoginErrorSnackBar(): void {
    this._snackBar.openFromComponent(LoginErrorSnackBarComponent, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: 'errorSnackBar'
    });
  }

}


@Component({
  selector: 'login-error-snack-bar-component',
  template: `<span>Credenciales incorrectas</span>`
})
export class LoginErrorSnackBarComponent {}
