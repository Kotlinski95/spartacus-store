import { Component, OnInit } from '@angular/core';
import { AddToCartComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-add-to-cart-button',
  templateUrl: './custom-add-to-cart-button.component.html',
  styleUrls: ['./custom-add-to-cart-button.component.scss']
})
export class CustomAddToCartButtonComponent extends AddToCartComponent implements OnInit{}
