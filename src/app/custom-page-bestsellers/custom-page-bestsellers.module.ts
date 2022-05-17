import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPageBestsellersComponent } from './custom-page-bestsellers.component';
import { RouterModule } from '@angular/router';
import { CmsPageGuard } from '@spartacus/storefront';



@NgModule({
  declarations: [
    CustomPageBestsellersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'bestsellers',
        component: CustomPageBestsellersComponent,
        canActivate: [CmsPageGuard],
        data: { pageLabel: 'homepage'},
      }
    ])
  ]
})
export class CustomPageBestsellersModule { }
