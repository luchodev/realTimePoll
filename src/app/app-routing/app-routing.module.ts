import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { NewPollComponent } from '../new-poll/new-poll.component';
import { AnswerPollComponent } from '../answer-poll/answer-poll.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'new',
    component: NewPollComponent
  },
  {
    path: 'answer',
    component: AnswerPollComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
