import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {ReactiveFormsModule} from '@angular/forms'
import {DogBuilderComponent} from './dog-builder/dog-builder.component'
import {AuthFormComponent} from './auth-form/auth-form.component'
import {AsyncValidatorExampleComponent} from './async-validator-example/async-validator-example.component'
import {RouterModule, Routes} from "@angular/router";
import { SearchBarComponent } from './search-bar/search-bar.component'
import {HttpClientModule} from "@angular/common/http"

const routes: Routes = [
  {path: "", redirectTo: "auth", pathMatch: "full"},
  {path: "auth", component: AuthFormComponent},
  {path: "dog-builder", component: DogBuilderComponent},
  {path: "async-validation", component: AsyncValidatorExampleComponent},
  {path: "search-bar", component: SearchBarComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    DogBuilderComponent,
    AuthFormComponent,
    AsyncValidatorExampleComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
