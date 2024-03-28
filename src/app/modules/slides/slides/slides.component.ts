import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: [
    './slides.component.css',
    "/node_modules/keen-slider/keen-slider.min.css"
  ]
})
export class SlidesComponent {
  @ViewChild("sliderRef") sliderRef?: ElementRef<HTMLElement>;

  currentSlide: number = 1
  dotHelper: Array<Number> = []
  slider: KeenSliderInstance | null = null

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.sliderRef) {
        this.slider = new KeenSlider(this.sliderRef.nativeElement, {
          initial: this.currentSlide,
          slideChanged: (s) => {
            this.currentSlide = s.track.details.rel
          },
        })
        this.dotHelper = [
          ...Array(this.slider.track.details.slides.length).keys(),
        ]
      } else {
        throw new Error('No sliderRef');
      }
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
