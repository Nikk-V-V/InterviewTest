import { Component, OnInit } from '@angular/core';
import { Photo, Post } from '../../shared/interfaces';
import { PhotoService } from '../../shared/services/photo.service';
import { PostService } from '../../shared/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Post[];
  photos: Photo[];
  constructor(
    private postService: PostService,
    private photoService: PhotoService
  ) {}

  ngOnInit() {
    this.get();
  }

  get(): void {
    this.getTopTenPhoto();
    this.getTopTenPost();
  }

  getTopTenPhoto(): void {
    this.photoService.getAll().subscribe((photos: Photo[]) => {
      photos ? (this.photos = photos.slice(0, 19)) : null;
    });
  }

  getTopTenPost() {
    this.postService.getAll().subscribe((posts: Post[]) => {
      posts ? (this.posts = posts.slice(0, 10)) : null;
    });
  }
}
