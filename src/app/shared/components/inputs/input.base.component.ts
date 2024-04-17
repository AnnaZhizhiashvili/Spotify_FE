import { Directive, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Directive()
export abstract class InputBaseComponent  {
  @Input() formControl: FormControl
  @Input() label: string
  @Input() placeholder: string
  @Input() type: string
  @Input() required: boolean
  @Input() disabled: boolean

}
