import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2IziToastModule } from 'ng2-izitoast';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NewPollComponent } from './new-poll/new-poll.component';
import { AnswerPollComponent } from './answer-poll/answer-poll.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPollComponent,
    AnswerPollComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2IziToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
