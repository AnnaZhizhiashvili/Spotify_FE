import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ResizableModule, ResizeEvent } from 'angular-resizable-element';
import { ImageModule } from 'primeng/image';
import { ButtonComponent } from '../shared/button/button.component';
import { DialogModule } from 'primeng/dialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, ResizableModule, ImageModule, NgOptimizedImage, ButtonComponent, DialogModule, OverlayPanelModule, ButtonModule, ScrollPanelModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @ViewChild('wrapperEl') wrapperEl: ElementRef;
  public style: object = {};


  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 200;
    if (event.rectangle.width && event.rectangle.width < MIN_DIMENSIONS_PX) {
      return false;
    } else {
      return true;
    }

  }
  onResizing(event: ResizeEvent): void {

    this.style = {
      position: 'fixed',
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
    this.wrapperEl.nativeElement.style.width = event.rectangle.width + 'px';
    this.wrapperEl.nativeElement.style.height = event.rectangle.height + 'px';
  }
}
