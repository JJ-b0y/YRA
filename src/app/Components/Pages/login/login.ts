import { Component, signal } from '@angular/core';
import { ILogin } from '../../../Interface/loginInterface';
import { email, form, maxLength, minLength, PathKind, required, SchemaPathTree, FormField } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormField, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginModel = signal<ILogin>({
    email: '',
    password: ''
  });

  loginForm = form(this.loginModel, this.formValidations);

  formValidations(schemaPath: SchemaPathTree<ILogin, PathKind.Root>) {
    required(schemaPath.email, { message: "Email is required" });
    required(schemaPath.password, { message: "Password is required" });
    email(schemaPath.email, { message: "Email is Invalid" });
    minLength(schemaPath.password, 8, { message: "Password must be at least 8 characters" });
    maxLength(schemaPath.password, 12, { message: "Password must be at most 12 characters" });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    console.log(this.loginModel());
  };
}
