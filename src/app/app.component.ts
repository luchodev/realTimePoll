import { Component } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Real-time Poll';

  constructor(public iziToast: Ng2IzitoastService){}

  ngOnInit(){
    particlesJS.load('particles-js', 'assets/particles.json', null);
    this.backgroundPicture();
  }

  backgroundPicture(): void {
    let n = Math.floor((Math.random() * 5) + 1);
    let clase = 'c' + n;
    let el = document.getElementById('particles-js');
    el.classList.add(clase);
  }
}
