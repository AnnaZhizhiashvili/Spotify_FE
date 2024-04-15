import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() formControl: FormControl
  @Input() label: string
  @Input() placeholder: string
  @Input() type: string
  @Input() required: boolean
  @Input() disabled: boolean
}
