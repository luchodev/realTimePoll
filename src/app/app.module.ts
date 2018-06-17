import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewPollComponent } from './new-poll/new-poll.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AnswerPollComponent } from './answer-poll/answer-poll.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPollComponent,
    AnswerPollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
