# Angular Reactive Forms

The goal of this repo is to demonstrate the features, flexibility, and testability of [Angular's reactive forms](https://angular.io/guide/reactive-forms)

- Separates data architecture from visual architecture 
- [Observable input changes](https://angular.io/api/forms/AbstractControl#valueChanges)
- [Nested form groups](https://angular.io/guide/reactive-forms#nesting-form-groups)
- [Form arrays](https://angular.io/guide/reactive-forms#dynamic-controls-using-form-arrays)
- [Validations](https://angular.io/guide/form-validation#reactive-form-validation)
- Testability

Examples include: 
- Auth form: demonstrates basic form group and form controls, including synchronous [validations](https://angular.io/guide/form-validation#reactive-form-validation)
- Dog builder: a form to craft your perfect dog, happens to demonstrate [FormBuilder](https://angular.io/guide/reactive-forms#generating-form-controls-with-formbuilder), [form arrays](https://angular.io/guide/reactive-forms#dynamic-controls-using-form-arrays), [nested forms](https://angular.io/guide/reactive-forms#creating-nested-form-groups), and [observable input changes]((https://angular.io/api/forms/AbstractControl#valueChanges))
- [Async Validation](https://angular.io/guide/form-validation#async-validation): name creativity took a spike. Pretty self explanatory. Names of note include billy and gertrude
- Search bar: demonstrates a stand-alone form control and doing more fancy things on value changes
