import { Component } from '@angular/core';
import { ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.css'
})
export class SlideshowComponent {


  images = [
    ...srcs.map(src =>
      new ImageItem({ src: src, thumb: src }),
    )
  ];

}

const srcs = [
  'assets/photos/2D6FA242-0FFC-4C40-8F0C-8347B9D8792E.jpeg',
  'assets/photos/9B1E6CE8-8510-46D1-BEE5-235A0D66421B.jpeg',
  'assets/photos/14A31D2F-4F68-4860-BE68-F7ABC53D1B3F.jpeg',
  'assets/photos/731BB232-058E-4D23-8CB2-BDEF287033CA.jpeg',
  'assets/photos/33616E95-BBD3-447E-8E62-71CCEDA7B233.jpeg',
  'assets/photos/2728931C-9455-4D52-9C90-80E1159C0324.jpeg',
  'assets/photos/D7A8AA99-8C29-41D2-8D3F-9ACA683ECCF7.jpeg',
  'assets/photos/F05C26A8-252C-4184-8576-918D5AE44E7F.jpeg',
  'assets/photos/F31A72A1-E910-4A39-9026-C3FA6FBD1C91.jpeg',
]







