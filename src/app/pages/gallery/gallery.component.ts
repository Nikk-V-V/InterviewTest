import { Component, OnInit } from '@angular/core';
import { Photo } from '../../shared/interfaces';
import { PhotoService } from '../../shared/services/photo.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  photos: Photo[];
  data: Photo[];

  pageSize = 27;
  pageSizeOptions: number[] = [27, 51, 102];

  cols = 3;
  rowHeight = '5:4';

  constructor(
    private photoService: PhotoService,
    breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver.observe([Breakpoints.Medium]).subscribe(result => {
      if (result.matches) {
        this.cols = 2;
        this.rowHeight = '4:3';
      }
    });
    breakpointObserver.observe([Breakpoints.Small]).subscribe(result => {
      if (result.matches) {
        this.cols = 1;
        this.rowHeight = '2:1';
      }
    });

    breakpointObserver.observe([Breakpoints.XSmall]).subscribe(result => {
      if (result.matches) {
        this.cols = 1;
        this.rowHeight = '3:4';
      }
    });
    breakpointObserver.observe([Breakpoints.Web]).subscribe(result => {
      if (result.matches) {
        this.cols = 3;
        this.rowHeight = '5:4';
      }
    });
  }

  ngOnInit() {
    this.get();
  }

  get() {
    this.photoService.getAll().subscribe((photos: Photo[]) => {
      this.data = photos;
      this.getPageData(0, this.pageSize);
    });
  }

  getPageData(pageIndex: number, pageSize: number): void {
    const startIndex = pageIndex * pageSize;
    this.photos = [...this.data].splice(startIndex, pageSize);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string): void {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map(str => +str);
    }
  }
}
