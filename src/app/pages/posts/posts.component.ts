import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Post } from '../../shared/interfaces';
import { PostService } from '../../shared/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  posts: Post[];
  data: Post[];

  pageSize = 25;
  pageSizeOptions: number[] = [25, 50, 100];

  pageEvent: PageEvent;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.postService.getAll().subscribe((posts: Post[]) => {
      this.data = posts;
      this.getPageData(0, this.pageSize);
    });
  }

  getPageData(pageIndex: number, pageSize: number): void {
    const startIndex = pageIndex * pageSize;
    this.posts = [...this.data].splice(startIndex, pageSize);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string): void {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map(str => +str);
    }
  }
}
