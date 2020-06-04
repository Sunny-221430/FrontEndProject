import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElearningAboutComponent } from './elearning-about/elearning-about.component';

@NgModule({
  declarations: [
    AppComponent,
    ElearningAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector:Injector){}
  ngDoBootstrap(): void {
    const{injector}= this;
    const ngCustomElement = createCustomElement( ElearningAboutComponent, {injector});
    customElements.define('app-AboutComponent', ngCustomElement);
  }
 }
