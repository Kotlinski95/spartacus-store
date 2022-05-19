import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponentComponent } from './sale-component/sale-component.component';
import { RecentlyBoughtComponent } from './recently-bought/recently-bought.component';



@NgModule({
  declarations: [
    SaleComponentComponent,
    RecentlyBoughtComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
