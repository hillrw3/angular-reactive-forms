import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {DogBuilderComponent} from './dog-builder.component'
import {ReactiveFormsModule} from '@angular/forms'

describe('DogBuilderComponent', () => {
  let component: DogBuilderComponent
  let fixture: ComponentFixture<DogBuilderComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DogBuilderComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DogBuilderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('validations', () => {
    it('name is required', () => {
      expect(component.form.get('name').errors.required).toEqual(true)
    })

    it('requires and enables coat color if dog has hair', () => {
      component.form.get('hasHair').setValue(false)

      expect(component.form.get('coatColor').errors).toBeNull()
      expect(component.form.get('coatColor').enabled).toEqual(false)

      component.form.get('hasHair').setValue(true)

      expect(component.form.get('coatColor').errors.required).toEqual(true)
      expect(component.form.get('coatColor').enabled).toEqual(true)
    })
  })

  describe('#addNickname', () => {
    it('adds a new nickname form control', () => {
      expect(component.nicknames.controls.length).toEqual(1)

      component.addNickname()

      expect(component.nicknames.controls.length).toEqual(2)
    })
  })

  describe('#hasError', () => {
    it('returns true if the control is invalid and has been touched', () => {
      let control = component.form.get('name');

      expect(component.hasError(control)).toEqual(false)

      control.markAsTouched()

      expect(component.hasError(control)).toEqual(true)
    })
  })
})
