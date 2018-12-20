import {of} from "rxjs"
import {UsernameValidator} from "./username-validator"
import {FormControl} from "@angular/forms"

describe("UsernameValidator", () => {
  it("returns null if the username is available", async () => {
    const userService = {validateUsername: () => of(true)}
    const validator = new UsernameValidator(userService)

    validator.validate(new FormControl("")).subscribe(error => {
      expect(error).toBeNull()
    })
  })

  it("returns an error if the username is already taken", () => {
    const userService = {validateUsername: () => of(false)}
    const validator = new UsernameValidator(userService)

    validator.validate(new FormControl("")).subscribe(error => {
      expect(error).toEqual({username: 'already taken'})
    })
  })
})
