import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../shared/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input('posts') posts: Post[];
  @Input('className') className: string;
  @Output() deletePost: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  remove(id: number): any {
    this.deletePost.emit(id);
  }
}
