import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncValidatorExampleComponent } from './async-validator-example.component';

describe('AsyncValidatorExampleComponent', () => {
  let component: AsyncValidatorExampleComponent;
  let fixture: ComponentFixture<AsyncValidatorExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncValidatorExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncValidatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
