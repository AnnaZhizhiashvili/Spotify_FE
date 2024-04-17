import { Component, Input } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputBaseComponent } from '../input.base.component';

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
  styleUrls: ['../input.base.component.scss','./input.component.scss']
})
export class InputComponent extends InputBaseComponent {
  constructor() {
    super();
  }

}
