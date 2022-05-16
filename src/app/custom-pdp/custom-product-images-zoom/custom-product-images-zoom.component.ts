import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  CurrentProductService,
  ProductImagesComponent,
} from '@spartacus/storefront';
import { Product } from '@spartacus/core';

@Component({
  selector: 'app-custom-product-images-zoom',
  templateUrl: './custom-product-images-zoom.component.html',
  styleUrls: ['./custom-product-images-zoom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomProductImagesZoomComponent extends ProductImagesComponent {
  expandImage = new BehaviorSubject(false);
  selectedIndex!: number;

  product$: Observable<Product> = this.product$;

  constructor(protected currentProductService: CurrentProductService) {
    super(currentProductService);
  }

  openImage(item: any): void {
    this.mainMediaContainer.next(item);
    this.selectedIndex = this.mainMediaContainer.value?.zoom?.galleryIndex ?? 0;
  }

  /**
   * Opens image zoom dialog.
   */
  triggerZoom(value: boolean): void {
    this.expandImage.next(value);
  }
}

