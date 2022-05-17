import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { CheckoutConfig } from '@spartacus/checkout/root';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      checkout: {
        guest: true,
      }
    } as CheckoutConfig)
  ]
})
export class CheckoutModule { }
