import { Component } from '@angular/core';
import { InputComponent } from '../../shared/input/input.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  getControl(formGroup: FormGroup, controlName: string): FormControl {
    return formGroup.get(controlName) as FormControl;
  }

}
