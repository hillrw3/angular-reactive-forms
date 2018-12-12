import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {AsyncValidatorExampleComponent} from './async-validator-example.component'
import {ReactiveFormsModule} from "@angular/forms"

describe('AsyncValidatorExampleComponent', () => {
  let component: AsyncValidatorExampleComponent
  let fixture: ComponentFixture<AsyncValidatorExampleComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncValidatorExampleComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncValidatorExampleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    component.ngOnInit()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
