import { Component } from '@angular/core';
import { InputComponent } from '../../shared/components/inputs/input/input.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordComponent } from '../../shared/components/inputs/password/password.component';
import { InputSwitchComponent } from '../../shared/components/inputs/input-switch/input-switch.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputComponent,
    PasswordComponent,
    InputSwitchComponent,
    ButtonComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(false)
  })

  getControl(formGroup: FormGroup, controlName: string): FormControl {
    return formGroup.get(controlName) as FormControl;
  }

}
