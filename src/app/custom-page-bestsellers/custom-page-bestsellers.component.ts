import { Component, OnInit } from '@angular/core';
import { Product, ProductSearchService, RoutingService } from '@spartacus/core';
import { filter, pluck, take } from 'rxjs/operators';

@Component({
  selector: 'app-custom-page-bestsellers',
  templateUrl: './custom-page-bestsellers.component.html',
  styleUrls: ['./custom-page-bestsellers.component.scss'],
})
export class CustomPageBestsellersComponent implements OnInit {
  constructor(
    private routingService: RoutingService,
    private productSearchService: ProductSearchService
  ) {}

  ngOnInit(): void {}

  goToRandomProduct() {
    this.productSearchService.search('cam');
    // this.productSearchService.getResults().subscribe(results => console.log("Result: ", results));
    // Get reandom result here using filter from all results
    this.productSearchService
      .getResults()
      .pipe(
        filter((result) => result.hasOwnProperty('products')),
        pluck('products'),
        take(1)
      )
      // .subscribe(console.log).unsubscribe(); not neccessary wkith take(1)
      .subscribe((products) => {
        if (products) {
          const randomProduct =
            products[Math.floor(Math.random() * products.length)];
          this.routingService.go({
            cxRoute: 'product',
            params: { code: randomProduct.code },
          });
        }
      });
    // this.routingService.go({ cxRoute: 'product', params: { code: '300938' } });
  }
}
