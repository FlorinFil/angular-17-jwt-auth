import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { SlideshowModule } from '../slideshow/slideshow.module';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    SlideshowModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
