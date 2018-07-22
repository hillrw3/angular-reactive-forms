import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {CoatColor} from '../dog'

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup
  coatColors: CoatColor[] = Object.values(CoatColor)

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm()
    this.connectCoatColorToHasHair()
  }

  submitForm() {
    console.log(this.form.value)
  }

  private createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      sex: 'noPreference',
      weight: 0,
      hasHair: true,
      coatColor: [null, Validators.required]
    })
  }

  private connectCoatColorToHasHair() {
    this.form.get('hasHair').valueChanges.subscribe(hasHair => {
      const coatColor = this.form.get('coatColor')
      if (hasHair) {
        coatColor.enable()
        coatColor.setValidators(Validators.required)
      } else {
        coatColor.disable()
        coatColor.clearValidators()
      }
      coatColor.updateValueAndValidity()
    })
  }
}
