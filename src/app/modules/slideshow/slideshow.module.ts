import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { GalleryModule } from 'ng-gallery';



@NgModule({
  declarations: [
    SlideshowComponent
  ],
  imports: [
    CommonModule,
    GalleryModule
  ],
  exports: [
    SlideshowComponent
  ]
})
export class SlideshowModule { }
