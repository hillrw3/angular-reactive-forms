import {Injectable} from '@angular/core'
import {Observable, of} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  validateUsername(username: string): Observable<boolean> {
    const takenUsernames = ['tim', 'billy', 'charlene', 'gertrude', 'frank']
    return of(!takenUsernames.includes(username))
  }
}
