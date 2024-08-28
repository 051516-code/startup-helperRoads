import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-comment-summary',
  templateUrl: './comment-summary.component.html',
  styleUrls: ['./comment-summary.component.scss'],
})
export class CommentSummaryComponent  implements OnInit {

  @Input() commentStats = {
    totalComments: 15,
    averageRating: 4
  };

  constructor() { }

  ngOnInit() {}

}
