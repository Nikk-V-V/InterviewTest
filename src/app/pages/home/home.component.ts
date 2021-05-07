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
      this.posts = posts.slice(0, 9);
    });
  }

  getTopPhotos() {
    this.photoService.getAll().subscribe((photos: Photo[]) => {
      this.photos = photos.slice(0, 9);
    });
  }
}
