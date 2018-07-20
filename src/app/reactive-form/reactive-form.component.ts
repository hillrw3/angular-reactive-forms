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

    this.form.get('hasHair').valueChanges.subscribe(hasHair => {
      const coatColor = this.form.get('coatColor')
      if (hasHair) {
        coatColor.setValidators(Validators.required)
      } else {
        coatColor.clearValidators()
      }
      coatColor.updateValueAndValidity()
    })
  }
}
