import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup} from "@angular/forms"
import {validateUsernameUniqueness} from "./validations"
import {UserService} from "../user.service"

@Component({
  selector: 'async-validator-example',
  templateUrl: './async-validator-example.component.html',
  styleUrls: ['./async-validator-example.component.scss']
})
export class AsyncValidatorExampleComponent implements OnInit {
  form: FormGroup

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    this.buildForm()
  }

  get username() {
    return this.form.get('username')
  }

  private buildForm() {
    this.form = this.fb.group({
      username: ['', null, validateUsernameUniqueness(this.userService)]
    })
  }
}
