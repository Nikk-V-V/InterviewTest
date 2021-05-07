import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../shared/interfaces';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input('photos') photos: Photo[];

  constructor() {}

  ngOnInit() {}
}
