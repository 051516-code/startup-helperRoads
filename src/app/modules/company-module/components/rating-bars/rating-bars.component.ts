import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-rating-bars',
  templateUrl: './rating-bars.component.html',
  styleUrls: ['./rating-bars.component.scss'],
})
export class RatingBarsComponent  implements OnInit {
  @Input() ratings = {
    comments: 3,
    experience: 4,
    reputation: 2,
    frequency: 3
  };
  @Input() labels = {
    comments: 'Medio',
    experience: 'Profesional',
    reputation: 'Normal',
    frequency: 'Media'
  };

  constructor() { }

  ngOnInit() {}

}
