import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent{

  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe=null;
  today2 = this.pipe.transform(Date.now(), 'EEEE, MMMM d, y');

  slides: string [] = ['../../../../../assets/icons/tony.jpg', '../../../../../assets/icons/galleta.png', '../../../../../assets/icons/tony.jpg' ]
  i=0;

  getSlide() {
      return this.slides[this.i];
  }

  getPrev() {
    this.i == 0 ? (this.i = this.slides.length - 1) : this.i--;
  }

  getNext() {
    this.i < this.slides.length - 1 ? this.i++ : (this.i = 0);
  }

}
