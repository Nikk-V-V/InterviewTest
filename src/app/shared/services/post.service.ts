import { HttpClient } from '@angular/common/http';
import { repeatGroups } from '@angular/compiler/src/shadow_css';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getTopTen(posts: Post[]) {
    return posts.slice(0, 9);
  }

  remove(posts: Post[], id: number): Post[] {
    return posts.filter(item => item.id !== id);
  }

  update(res: Post, posts: Post[]): Post[] {
    return posts.map((post: Post) =>  post.id === res.id ? post = res : post)
  }
}
