// import { map } from 'rxjs/operators';
import { combineLatest, Observable} from 'rxjs';
import { Card, CurrentProductService, ICON_TYPE } from '@spartacus/storefront';
import { Component, OnInit } from '@angular/core';
import { PaymentDetails, Product } from '@spartacus/core';
import { TranslationService } from '@spartacus/core';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-custom-product-summary',
  templateUrl: './custom-product-summary.component.html',
  styleUrls: ['./custom-product-summary.component.scss']
})
export class CustomProductSummaryComponent implements OnInit {
  iconTypes = ICON_TYPE;
  product$: Observable<Product | null> = this.currentProductService.getProduct();
  constructor(private currentProductService: CurrentProductService,  private translation: TranslationService) { }
  content = "content";
  manufacturer = "Manufacturer: ";
  ngOnInit(): void {
    this.getPaymentCardContent2();
    this.getPaymentCardContent3();
  }

getPaymentCardContent2() {
  this.translation.translate('productSummary.showReviews').subscribe((text: string) => { console.log('Overwrited translationn: ', text); }).unsubscribe();
}

getPaymentCardContent3() {
  this.product$.subscribe((product) => {
    console.log("product: ", product);
    this.manufacturer += `${product?.manufacturer}`;
  });
  this.translation.translate('slCustomFeature.subKey').subscribe((text: string) => { this.content = text }).unsubscribe();
  }
}
