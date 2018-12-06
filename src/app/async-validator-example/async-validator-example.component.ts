import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors} from "@angular/forms"
import {of} from "rxjs"

function validateUniqueUsername(control: FormControl) {
  const takenUsernames = ['tim', 'billy', 'charlene', 'gertrude', 'frank']
  let failed = takenUsernames.includes(control.value)
  return of(failed ? {username: 'already taken'} : null)
}

@Component({
  selector: 'async-validator-example',
  templateUrl: './async-validator-example.component.html',
  styleUrls: ['./async-validator-example.component.scss']
})
export class AsyncValidatorExampleComponent implements OnInit {
  form: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm()

    this.username.valueChanges.subscribe(value => {
      console.log(value)
      console.log(this.username.invalid)
      console.log(this.username.touched)
    })
  }

  get username() {
    return this.form.get('username')
  }

  private buildForm() {
    this.form = this.fb.group({
      username: ['', null, validateUniqueUsername]
    })
  }
}
