import {AbstractControl} from "@angular/forms"

export function hasError(control: AbstractControl) {
  return control.touched && control.invalid
}
