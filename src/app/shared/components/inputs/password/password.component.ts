import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';
import { InputBaseComponent } from '../input.base.component';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [
    PasswordModule,
    ReactiveFormsModule
  ],
  templateUrl: './password.component.html',
  styleUrls: ['../input.base.component.scss', './password.component.scss']
})
export class PasswordComponent extends InputBaseComponent {
  constructor() {
    super();
  }

}
