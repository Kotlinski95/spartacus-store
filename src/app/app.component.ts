import { Component } from '@angular/core';
import { ProductDetailOutlets } from '@spartacus/storefront';
import { OutletPosition } from '@spartacus/storefront';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spartacus-store';
  outletPosition = OutletPosition;
  pdpOutlets = ProductDetailOutlets;

  constructor(){
    console.log("pdpOutlets: ", this.pdpOutlets);
  }

}
