import {Component, OnInit} from '@angular/core'
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms'
import {CoatColor} from '../dog'
import {displayAllErrors, hasError} from "../form-helpers"

@Component({
  selector: 'reactive-form',
  templateUrl: './dog-builder.component.html',
})
export class DogBuilderComponent implements OnInit {
  form: FormGroup
  coatColors: CoatColor[] = Object.values(CoatColor)
  hasError = hasError

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm()
    this.connectCoatColorToHasHair()
  }

  submitForm() {
    if (this.form.invalid) {
      displayAllErrors(this.form)
      return
    }

    console.log(this.form.value)
  }

  get nicknames(): FormArray {
    return this.form.get('nicknames') as FormArray
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      sex: 'female',
      weight: 0,
      hasHair: true,
      coatColor: [null, Validators.required],
      nicknames: this.formBuilder.array([
        this.formBuilder.control('')
      ]),
      owner: this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
      })
    })
  }

  private connectCoatColorToHasHair() {
    this.form.get('hasHair').valueChanges.subscribe((hasHairValue: boolean) => {
      const coatColor = this.form.get('coatColor')
      if (hasHairValue) {
        coatColor.enable()
        coatColor.setValidators(Validators.required)
      } else {
        coatColor.setValue('')
        coatColor.disable()
        coatColor.clearValidators()
      }
      coatColor.updateValueAndValidity()
    })
  }

  addNickname() {
    this.nicknames.push(this.formBuilder.control(''))
  }
}
