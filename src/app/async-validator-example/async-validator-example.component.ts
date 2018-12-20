import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup} from "@angular/forms"
import {UsernameValidator} from "./validations"

@Component({
  selector: 'async-validator-example',
  templateUrl: './async-validator-example.component.html',
})
export class AsyncValidatorExampleComponent implements OnInit {
  form: FormGroup

  constructor(private fb: FormBuilder, private validator: UsernameValidator) {
  }

  ngOnInit() {
    this.buildForm()
  }

  get username() {
    return this.form.get('username')
  }

  private buildForm() {
    this.form = this.fb.group({
      username: ['', null, this.validator.validate.bind(this.validator)]
    })
  }

  private hasError(control) {
    return control.dirty && control.invalid
  }
}
