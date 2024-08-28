import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'],
})
export class CommentCardComponent  implements OnInit {
  @Input() comment = {
    photo: '',
    name: '',
    stars: 0,
    description: ''
  };

  constructor() { }

  ngOnInit() {}

}
