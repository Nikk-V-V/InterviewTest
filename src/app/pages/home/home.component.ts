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
    private photoService: PhotoService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.get();
  }

  get() {
    this.getTopPosts();
    this.getTopPhotos();
  }

  getTopPosts() {
    this.postService.getAll().subscribe((posts: Post[]) => {
      this.posts = this.postService.getTopTen(posts);
    });
  }

  getTopPhotos() {
    this.photoService.getAll().subscribe((photos: Photo[]) => {
      this.photos = this.photoService.getTopTen(photos);
    });
  }
}
