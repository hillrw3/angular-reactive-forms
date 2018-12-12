import {FormControl} from "@angular/forms"
import {of} from "rxjs"
import {UserService} from "../user.service"
import {switchMap} from "rxjs/operators"

export function validateUsernameUniqueness(userService: UserService) {
  return (control: FormControl) => {
    return userService.validateUsername(control.value)
      .pipe(
        switchMap(validUsername => of(validUsername ? null : {username: 'already taken'}))
      )
  }
}
