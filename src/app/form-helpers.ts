import {AbstractControl, FormArray, FormGroup} from "@angular/forms"

export function hasError(control: AbstractControl) {
  return control.touched && control.invalid
}

export function displayAllErrors(form) {
  let controlNames = Object.keys(form.controls)
  controlNames.forEach((name) => {
    const control = form.get(name)
    if (control instanceof FormGroup || control instanceof FormArray) {
      displayAllErrors(control)
    }
    control.markAsTouched()
  })
}
