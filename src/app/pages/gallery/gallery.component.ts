import { Component, OnInit } from '@angular/core';
import { Photo } from '../../shared/interfaces';
import { PhotoService } from '../../shared/services/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  photos: Photo[]

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
  }

  getTopPhotos() {
    this.photoService.getAll().subscribe((photos: Photo[]) => {
      this.photos = photos;
    });
  }
}