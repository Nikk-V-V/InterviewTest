import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  mode: MatDrawerMode = 'side';
  opened = true;

  constructor(private breakpointObserver: BreakpointObserver) {
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
}
