import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { UpdatePostComponent } from '../../components/update-post/update-post.component';
import { Post } from '../../shared/interfaces';
import { PostService } from '../../shared/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  data: Post[];

  pageSizeOptions: number[] = [25, 50, 100];

  pageEvent: PageEvent;

  constructor(private postService: PostService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.postService.getAll().subscribe((posts: Post[]) => {
      this.data = posts;
      this.getPageData(0, 25);
    });
  }

  getPageData(pageIndex: number = 0, pageSize: number = 25): void {
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

  add(title: any, text: any): void {

    if(title.value && text.value) {
      const post = {
        id: this.data.length,
        userId: 2,
        title: title.value,
        body: text.value
      };

      title.value = '';
      text.value = '';

      this.data.unshift(post);
      this.getPageData(this.pageEvent?.pageIndex, this.pageEvent?.pageSize);
    }
    
  }

  remove(event): void {
    this.data = this.data.filter(item => item.id !== event);
    this.getPageData(this.pageEvent?.pageIndex, this.pageEvent?.pageSize);
  }

  update() {
    this.dialog
    .open(UpdatePostComponent)
    .afterClosed()
    .subscribe(res => {
      console.log(res)
    })
  }
}
