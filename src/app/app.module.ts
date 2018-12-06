import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AsyncValidatorExampleComponent } from './async-validator-example/async-validator-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    AuthFormComponent,
    AsyncValidatorExampleComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
