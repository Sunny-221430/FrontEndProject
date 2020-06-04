import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoftwareCoursesComponent } from './software-courses/software-courses.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    SoftwareCoursesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector:Injector){}
  ngDoBootstrap(): void {
    const{injector}= this;
    const ngCustomElement = createCustomElement( SoftwareCoursesComponent, {injector});
    customElements.define('app-softwarecourses', ngCustomElement);
  }
 }
