import {of} from "rxjs"
import {validateUsernameUniqueness} from "./validations"
import {FormControl} from "@angular/forms"

describe("validateUsernameUniqueness", () => {
  it("returns null if the username is available", async () => {
    const userService = {validateUsername: () => of(true)}

    validateUsernameUniqueness(userService)(new FormControl("")).subscribe(error => {
      expect(error).toBeNull()
    })
  })

  it("returns an error if the username is already taken", () => {
    const userService = {validateUsername: () => of(false)}

    validateUsernameUniqueness(userService)(new FormControl("")).subscribe(error => {
      expect(error).toEqual({username: 'already taken'})
    })
  })
})
