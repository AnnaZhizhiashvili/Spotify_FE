import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableModule, ResizeEvent } from 'angular-resizable-element';
import { AngularSplitModule } from 'angular-split';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, ResizableModule, AngularSplitModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @ViewChild('wrapperEl') wrapperEl: ElementRef;
  public style: object = {};

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      position: 'fixed',
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
    this.wrapperEl.nativeElement.style.width = event.rectangle.width + 'px';
    this.wrapperEl.nativeElement.style.height = event.rectangle.height + 'px';
    console.log(event.rectangle.width, event.rectangle.height);
    console.log(this.wrapperEl)
  }
}
