import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPollComponent } from '../new-poll/new-poll.component';
import { AnswerPollComponent } from '../answer-poll/answer-poll.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: NewPollComponent
  },
  {
    path:'ejemplo',
    component: AnswerPollComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
