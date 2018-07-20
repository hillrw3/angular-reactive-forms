import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

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

    it('requires coat color if dog has hair', fakeAsync(() => {
      component.form.get('hasHair').setValue(false);
      tick(1);
      expect(component.form.get('coatColor').errors).toBeNull();

      component.form.get('hasHair').setValue(true);
      tick(1);
      expect(component.form.get('coatColor').errors.required).toEqual(true);
    }));
  });
});
