import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawerMode } from '@angular/material/sidenav';
import { PhotoService } from './shared/services/photo.service';
import { PostService } from './shared/services/post.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  mode: MatDrawerMode = 'side';
  opened = true;

  constructor(
    breakpointObserver: BreakpointObserver,
    private photoService: PhotoService,
    private postService: PostService
  ) {
    breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
      .subscribe(result => {
        if (result.matches) {
          this.mode = 'over';
          this.opened = false;
        }
      });
    breakpointObserver.observe([Breakpoints.Web]).subscribe(result => {
      if (result.matches) {
        this.mode = 'side';
      }
    });
  }

  ngOnInit(): void {}
}
