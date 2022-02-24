import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoryLeaksComponent } from './memory-leaks/memory-leaks.component';
import { SubscriptionInsideSubscriptionComponent } from './subscription-inside-subscription/subscription-inside-subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoryLeaksComponent,
    SubscriptionInsideSubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
