import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms"
import {Observable, of} from "rxjs"
import {UserService} from "../user.service"
import {switchMap} from "rxjs/operators"
import {Injectable} from "@angular/core"

@Injectable({
  providedIn: 'root'
})
export class UsernameValidator implements AsyncValidator {

  constructor(private userService: UserService) {
    this.validate = this.validate.bind(this)
  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.userService.validateUsername(control.value)
      .pipe(
        switchMap(validUsername => of(validUsername ? null : {username: 'already taken'}))
      )
  }


}
