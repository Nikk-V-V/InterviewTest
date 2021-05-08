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
  @Input('isAction') isAction: boolean;
  @Output() deletePost: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  remove(id: number): void {
    this.deletePost.emit(id);
  }

  updatePost(post: Post): void {
    this.update.emit(post);
  }
}
