import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReactiveFormComponent} from './reactive-form.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('validations', () => {
    it('name is required', () => {
      expect(component.form.get('name').errors.required).toEqual(true);
    });

    it('requires and enables coat color if dog has hair', () => {
      component.form.get('hasHair').setValue(false);

      expect(component.form.get('coatColor').errors).toBeNull();
      expect(component.form.get('coatColor').enabled).toEqual(false);

      component.form.get('hasHair').setValue(true);

      expect(component.form.get('coatColor').errors.required).toEqual(true);
      expect(component.form.get('coatColor').enabled).toEqual(true);
    });
  });

  describe('#addNickname', () => {
    it('adds a new nickname form control', () => {
      expect(component.nicknames.controls.length).toEqual(1)

      component.addNickname()

      expect(component.nicknames.controls.length).toEqual(2)
    })
  })
});
