// import { map } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { CurrentProductService, ICON_TYPE } from '@spartacus/storefront';
import { Component, OnInit } from '@angular/core';
import { TranslationService, Product } from '@spartacus/core';
@Component({
  selector: 'app-custom-product-summary',
  templateUrl: './custom-product-summary.component.html',
  styleUrls: ['./custom-product-summary.component.scss']
})
export class CustomProductSummaryComponent implements OnInit {
  iconTypes = ICON_TYPE;
  product$: Observable<Product | null> = this.currentProductService.getProduct();
  manufacturer = '';

  constructor(private currentProductService: CurrentProductService,  private translation: TranslationService) { }
  ngOnInit(): void {
    this.displayManufacturer();
  }

displayManufacturer() {
  this.product$.subscribe((product) => { 
    this.manufacturer = `${product?.manufacturer}`;
  }).unsubscribe();
  }
}
