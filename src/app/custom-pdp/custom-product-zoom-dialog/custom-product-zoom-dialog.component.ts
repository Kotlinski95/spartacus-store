import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FocusConfig,
  ICON_TYPE,
  LaunchDialogService,
} from '@spartacus/storefront';

@Component({
  selector: 'app-custom-product-zoom-dialog',
  templateUrl: './custom-product-zoom-dialog.component.html',
  styleUrls: ['./custom-product-zoom-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomProductZoomDialogComponent {
  iconType = ICON_TYPE;

  focusConfig: FocusConfig = {
    trap: true,
    block: true,
    autofocus: 'button',
    focusOnEscape: true,
  };

  @Input() galleryIndex!: number;

  @HostListener('click', ['$event'])
  handleClick(event: UIEvent): void {
    // Close on click outside the dialog window
    if ((event.target as any).tagName === this.el.nativeElement.tagName) {
      this.close('Cross click');
    }
  }

  constructor(
    protected launchDialogService: LaunchDialogService,
    protected el: ElementRef
  ) {}

  close(reason = ''): void {
    this.launchDialogService.closeDialog(reason);
  }
}
