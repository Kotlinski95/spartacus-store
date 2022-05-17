
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';

import {
  AddToCartComponent,
} from '@spartacus/storefront';

@Component({
  selector: 'app-custom-add-to-cart-component',
  templateUrl: './custom-add-to-cart-component.component.html',
  styleUrls: ['./custom-add-to-cart-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomAddToCartComponentComponent extends AddToCartComponent implements OnInit{}
