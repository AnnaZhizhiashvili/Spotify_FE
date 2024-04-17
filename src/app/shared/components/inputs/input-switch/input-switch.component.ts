import { Component } from '@angular/core';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ReactiveFormsModule } from '@angular/forms';
import { InputBaseComponent } from '../input.base.component';

@Component({
  selector: 'app-input-switch',
  standalone: true,
  imports: [
    InputSwitchModule,
    ReactiveFormsModule
  ],
  templateUrl: './input-switch.component.html',
  styleUrls: ['../input.base.component.scss', './input-switch.component.scss']
})
export class InputSwitchComponent extends InputBaseComponent {

}
